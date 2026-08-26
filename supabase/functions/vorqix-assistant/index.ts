const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are the VORQIX.AI Solutions Assistant — a sharp, concise enterprise AI consultant.

VORQIX.AI builds intelligent software: AI automation, AI agents, custom software, SaaS platforms, business intelligence, integrations, and workflow optimization. Flagship products: SaaS Factory AI (rapid SaaS scaffolding), NEXUS Dispatch Pro (logistics dispatch & routing), Compliance Scanner AI (SOC2/HIPAA/GDPR/ISO scanning), VORCREATE AI (multi-modal content engine).
Industries served: logistics, transportation, consulting, healthcare, real estate, ecommerce, professional services, startups, agencies.
Typical engagements: 4-12 week builds; budgets from under $25k to $500k+. Clients own the code.

Rules:
- Answer in 120 words or less, plain text, no markdown headers.
- Be specific: name the relevant VORQIX service or product, the likely automation, and expected impact.
- If the visitor describes their business, propose 2-3 concrete automation opportunities.
- Close with a next step (book a strategy call at /contact) when it's natural.
- Never invent pricing guarantees or client names.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const trimmed = messages
      .filter((m: { role?: string; content?: string }) => m?.role && typeof m.content === "string")
      .slice(-12)
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content.slice(0, 4000),
      }));

    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
      }),
    });

    if (upstream.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit reached. Try again in a moment." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (upstream.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!upstream.ok || !upstream.body) {
      const detail = await upstream.text();
      console.error("gateway error", upstream.status, detail);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(upstream.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("vorqix-assistant error", err);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

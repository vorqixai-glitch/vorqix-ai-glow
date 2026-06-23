import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "SaaS Products" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong" : ""}`}>
      <div className="container flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm"><Link to="/contact">Book a call</Link></Button>
          <Button asChild variant="hero" size="sm"><Link to="/contact">Get Started</Link></Button>
        </div>
        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => `px-3 py-3 rounded-md text-sm ${isActive ? "text-primary bg-secondary" : "text-muted-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2"><Link to="/contact">Get Started</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
};
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Soluções", href: "#stack" },
  { label: "Sobre", href: "#about" },
  { label: "Portfólio", href: "#portfolio" },
];

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "glass-strong shadow-lg shadow-black/10"
        : "bg-transparent"
        }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display text-xl font-bold text-gradient-multi">
          Mugen
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={onOpenContact}
            className="shimmer relative rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(220 100% 60%))",
            }}
          >
            <span className="relative z-10">Entre em contato</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="relative rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/50 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass-strong md:hidden"
          >
            <div className="container flex flex-col gap-2 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                onClick={() => {
                  onOpenContact();
                  setOpen(false);
                }}
                className="mt-2 w-fit rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                style={{
                  background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(220 100% 60%))",
                }}
              >
                Entre em contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

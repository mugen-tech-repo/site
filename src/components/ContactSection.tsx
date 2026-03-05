import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Terminal } from "lucide-react";

interface ContactSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSection = ({ isOpen, onClose }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5516997711261";
    const messageText = `Olá, meu nome é ${form.name}, meu email é ${form.email}\n\n${form.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", message: "" });
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
          style={{ zIndex: 99999, isolation: "isolate" }}
        >
          {/* Deep blur backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="glass-strong border-gradient relative w-full max-w-2xl overflow-hidden rounded-[2rem] p-8 shadow-2xl sm:p-12 z-10"
          >
            {/* Decorative background glow inside modal */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />

            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-secondary/50 p-2.5 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:rotate-90"
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary text-primary ring-1 ring-primary/30">
                <Terminal className="h-7 w-7" />
              </div>

              <h2 className="font-display text-4xl font-bold">
                Inicie o <span className="text-gradient">Contato</span>
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Pronto para compilar sua ideia em um produto real? Fale conosco via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Nome / Protocolo</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-white/5 bg-black/40 px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background/60 focus:outline-none focus:ring-1 focus:ring-primary/50"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-white/5 bg-black/40 px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background/60 focus:outline-none focus:ring-1 focus:ring-primary/50"
                      placeholder="Seu email"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Mensagem / Payload</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-white/5 bg-black/40 px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background/60 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="Descreva o escopo do projeto..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl py-5 font-display text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(220 100% 60%))",
                    }}
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactSection;

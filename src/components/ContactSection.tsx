import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

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

    // Formatar a mensagem para o WhatsApp
    const phoneNumber = "5511999999999"; // SUBSTITUA PELO SEU NÚMERO REAL
    const messageText = `Olá, meu nome é ${form.name}, meu email é ${form.email}\n\n${form.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");

    setForm({ name: "", email: "", message: "" });
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 99999, isolation: "isolate" }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl rounded-3xl border border-border/50 bg-card p-8 shadow-2xl sm:p-12 z-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X size={24} />
            </button>

            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Pronto para transformar sua ideia em realidade? Fale conosco.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Como podemos te ajudar?"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-display text-sm font-bold text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary))] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Enviar mensagem no WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactSection;

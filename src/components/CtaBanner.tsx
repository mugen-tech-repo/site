import { motion } from "framer-motion";

const CtaBanner = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] p-12 text-center shadow-2xl sm:p-20"
        >
          {/* Animated Mesh Background */}
          <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift blur-xl opacity-60" />

          {/* Secondary dark gradient to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
          <div className="absolute inset-0 noise" />

          {/* Floating geometric shapes */}
          <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full border border-primary/20 bg-primary/5 animate-float-slow backdrop-blur-3xl" />
          <div className="absolute right-[15%] bottom-[10%] h-32 w-32 rounded-3xl border border-accent/20 bg-accent/5 animate-float backdrop-blur-3xl" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-foreground">
              Seu novo negócio começa <span className="text-gradient">agora</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground/90 max-w-xl">
              Não deixe sua concorrência dominar o mercado. Invista em tecnologia de ponta e garanta a liderança do seu negócio.
            </p>

            <button
              onClick={onOpenContact}
              className="mt-12 shimmer group relative inline-flex items-center gap-3 rounded-full px-10 py-5 font-display text-lg font-bold text-primary-foreground shadow-[0_0_40px_-10px_hsl(var(--primary))] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_hsl(var(--primary))] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(220 100% 60%))",
              }}
            >
              <span className="relative z-10">Entre em contato!</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;

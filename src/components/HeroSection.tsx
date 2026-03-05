import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Typewriter from "./ui/Typewriter";

const HeroSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[hsl(187_100%_50%/0.12)] animate-pulse-glow"
        />
        <div
          className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[hsl(220_100%_60%/0.10)] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[hsl(150_100%_50%/0.08)] animate-pulse-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

      <div className="container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm text-primary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Inovação Digital
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl min-h-[2.4em] flex items-center justify-center"
        >
          <span className="text-gradient-multi">
            <Typewriter
              words={["Mugen Tecnologia", "Transforme ideias", "Crie o impossível"]}
              typingSpeed={90}
              deletingSpeed={50}
              pauseTime={2500}
              cursorClassName="bg-primary"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          Sua visão, codificada com perfeição —{" "}
          <span className="text-foreground font-medium">do conceito ao deploy.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={onOpenContact}
            className="shimmer group relative inline-flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, hsl(187 100% 50%), hsl(220 100% 60%))",
            }}
          >
            <span className="relative z-10">Começar um projeto</span>
          </button>
          <a
            href="#stack"
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-8 py-4 font-display text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary/50"
          >
            Nossos diferenciais
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#stack" className="flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-primary">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-subtle" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

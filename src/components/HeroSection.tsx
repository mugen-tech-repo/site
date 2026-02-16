import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

import Typewriter from "./ui/Typewriter";

const HeroSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl min-h-[3em] flex items-center justify-center"
        >
          <Typewriter
            words={["Mugen Tecnologia", "Transforme ideias em soluções digitais"]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={2000}
            cursorClassName="bg-primary"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground"
        >
          Sua visão, codificada com perfeição
        </motion.p>

        <motion.button
          onClick={onOpenContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 inline-block rounded-full border border-primary bg-primary/10 px-8 py-3 font-display text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground glow-cyan"
        >
          Entre em contato
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

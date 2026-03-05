import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold sm:text-5xl"
          >
            Portfólio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Nossos casos de sucesso (em breve)
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto flex min-h-[400px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-secondary/20 p-8 text-center"
        >
          {/* Cyberpunk scanline effect */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-around opacity-10">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="h-px w-full bg-primary" />
            ))}
            <div className="absolute inset-x-0 h-10 animate-scan-line bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-md space-y-6">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-inner">
              <Settings className="h-10 w-10 animate-gear-spin" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/40 animate-pulse-glow" />
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold tracking-tight">
                Em Configuração<span className="animate-typing-blink text-primary">_</span>
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Estamos compilando os blocos de dados dos nossos projetos mais recentes. A transmissão visual começará em breve.
              </p>
            </div>

            {/* Decorative progress bar */}
            <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-gradient-to-r from-primary to-accent animate-progress-fill rounded-full" />
            </div>
            <p className="text-right font-mono text-xs text-primary/70">72% carregado</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

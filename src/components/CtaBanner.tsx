import { motion } from "framer-motion";

const CtaBanner = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-10 text-center sm:p-16"
        >
          <div className="absolute inset-0 bg-card/40 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              O futuro da sua empresa começa hoje
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              A tecnologia certa pode transformar o seu negócio.
              Dê o primeiro passo rumo à transformação digital.
            </p>
            <button
              onClick={onOpenContact}
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
            >
              Quero Inovar AGORA!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;

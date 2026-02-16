import { motion } from "framer-motion";
import { Code, Rocket, Smartphone, Users } from "lucide-react";

const competencies = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Aplicações modernas com React, Next.js e TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Experiências nativas com React Native e Flutter.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Otimização de velocidade e SEO para máximo alcance.",
  },
  {
    icon: Users,
    title: "UX/UI Design",
    description: "Interfaces intuitivas e visualmente impactantes.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Sobre <span className="text-gradient">Nós</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Somos uma equipe apaixonada por tecnologia, focada em transformar ideias em
            produtos digitais de alta qualidade.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/40 card-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

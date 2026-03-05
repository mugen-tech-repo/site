import { motion } from "framer-motion";
import { Code, Rocket, Smartphone, Users } from "lucide-react";

const competencies = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Aplicações escaláveis com React, Next.js e TypeScript.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Experiências nativas fluidas com React Native e Flutter.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Users,
    title: "UX/UI Design",
    description: "Interfaces intuitivas e conversivas.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Rocket,
    title: "Ultra Performance",
    description: "Otimização de ponta e infraestrutura em nuvem global.",
    className: "md:col-span-1 md:row-span-1",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative z-10">
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold sm:text-5xl"
            >
              Nossa <span className="text-gradient">Missão</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              A Mugen Tecnologia não constrói apenas softwares; nós orquestramos soluções
              digitais transformadoras. Focamos em performance brutal, design premium e arquitetura escalável
              para impulsionar startups e empresas ao próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex gap-8"
            >
              <div>
                <p className="font-display text-4xl font-bold text-foreground">10+</p>
                <p className="text-sm font-medium text-primary">Tecnologias Core</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="font-display text-4xl font-bold text-foreground">99%</p>
                <p className="text-sm font-medium text-primary">Satisfação</p>
              </div>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {competencies.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group glass rounded-3xl p-6 transition-all hover:bg-secondary/40 ${item.className}`}
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

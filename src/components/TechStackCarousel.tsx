import { Rocket, ShieldCheck, Smartphone, Search, Zap, Layout } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Rocket,
    title: "Alta Performance",
    description: "Sites e sistemas ultra-rápidos que carregam instantaneamente e retêm mais usuários.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Layouts que se adaptam perfeitamente a qualquer tela, do celular ao desktop.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Proteção de dados avançada e conformidade com as melhores práticas de segurança.",
  },
  {
    icon: Search,
    title: "Otimizado para SEO",
    description: "Estrutura preparada para que seu negócio apareça nas primeiras posições do Google.",
  },
  {
    icon: Layout,
    title: "Design Exclusivo",
    description: "Interfaces modernas e intuitivas desenhadas especificamente para sua marca.",
  },
  {
    icon: Zap,
    title: "Escalabilidade",
    description: "Sistemas preparados para crescer junto com o seu negócio, sem travamentos.",
  },
];

const TechStackCarousel = () => {
  return (
    <section id="stack" className="relative overflow-hidden py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold sm:text-5xl"
          >
            Nossos <span className="text-gradient">Diferenciais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Construímos o alicerce digital da sua empresa com as tecnologias mais robustas do mercado.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card with 3D perspective effect on hover via CSS transition */}
              <div
                className="glass-strong border-gradient relative flex h-full flex-col items-start gap-6 rounded-3xl p-8 transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0)",
                }}
              >
                {/* Number background */}
                <span className="absolute right-6 top-6 select-none font-display text-7xl font-bold text-foreground/5 transition-colors duration-500 group-hover:text-primary/10">
                  0{i + 1}
                </span>

                <div className="relative z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary p-4 text-primary ring-1 ring-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/30">
                  <item.icon className="h-6 w-6" />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel;

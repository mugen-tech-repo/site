import { Rocket, ShieldCheck, Smartphone, Search, Zap, Layout } from "lucide-react";

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
    <section id="stack" className="border-y border-border/50 bg-secondary/20 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Entregamos mais do que código: criamos soluções digitais completas que impulsionam o seu negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackCarousel;

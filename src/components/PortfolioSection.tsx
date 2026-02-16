import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    category: "Web App",
    image: project1,
  },
  {
    title: "E-Commerce Mobile",
    category: "Mobile App",
    image: project2,
  },
  {
    title: "Landing Page Corporativa",
    category: "Website",
    image: project3,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Portfólio
          </h2>
          <p className="mt-4 text-muted-foreground">Alguns dos nossos projetos recentes</p>
        </div>

        <div className="flex min-h-[300px] w-full items-center justify-center rounded-3xl border border-dashed border-border/50 bg-secondary/10 p-8 text-center">
          <div className="max-w-md space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
              <span className="text-3xl">🚧</span>
            </div>
            <h3 className="font-display text-xl font-bold">Em Construção</h3>
            <p className="text-muted-foreground">
              Estamos trabalhando em projetos incríveis para mostrar aqui. Em breve novidades!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;

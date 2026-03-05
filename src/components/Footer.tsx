import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-background/50 pt-16 pb-8 backdrop-blur-md overflow-hidden">
      {/* Decorative top border gradient line */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <a href="#hero" className="font-display text-2xl font-bold text-gradient-multi inline-block mb-2">
            Mugen
          </a>
          <p className="text-sm text-muted-foreground">
            Transformando ideias em soluções digitais
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="mailto:contato@mugentecnologia.com"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary))]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Mugen-Tecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary))]"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/mugentecnologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary))]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="container mt-12 border-t border-border/30 pt-8 text-center md:flex md:justify-between md:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mugen Tecnologia. Todos os direitos reservados.
        </p>
        <p className="mt-4 text-xs font-mono text-muted-foreground md:mt-0">
          STATUS: ONLINE <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-glow" ml-2 />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

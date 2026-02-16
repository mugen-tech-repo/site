import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="font-display text-lg font-bold text-primary">Mugen Tecnologia</p>
          <p className="text-xs text-muted-foreground">
            © 2026 Mugen Tecnologia. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:contato@mugentecnologia.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Mugen-Tecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/mugentecnologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

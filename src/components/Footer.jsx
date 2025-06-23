import { ArrowUp, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm text-muted-foreground font-semibold mb-1">
          &copy; {new Date().getFullYear()} Swapnil Kale. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex space-x-4 justify-center mb-1">
          <a href="https://www.linkedin.com/in/swapnilkale1411/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <Linkedin />
          </a>
          <a href="https://x.com/kale_swapn20206" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <Twitter />
          </a>
          <a href="https://github.com/swapsDotDev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <Github />
          </a>
        </div>
        <a href="mailto:swapnilkale1411@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">swapnilkale1411@gmail.com</a>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

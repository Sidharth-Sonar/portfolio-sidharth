import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { OrganicBlob } from "../wave-divider";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <OrganicBlob className="text-primary w-96 h-96 -top-20 -left-20" />
      <OrganicBlob className="text-primary w-80 h-80 -bottom-10 -right-10" />
      <OrganicBlob className="text-accent w-64 h-64 top-1/3 right-1/4" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
          <p className="text-sm sm:text-base font-medium text-primary mb-4 tracking-wide uppercase">
            Senior Frontend Engineer
          </p>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 stagger-1"
          style={{ animationFillMode: "forwards" }}
          data-testid="text-hero-name"
        >
          Sidharth Sonar
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 stagger-2"
          style={{ animationFillMode: "forwards" }}
          data-testid="text-hero-title"
        >
          Angular Specialist | UI/UX Developer
        </p>

        <p
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 stagger-3"
          style={{ animationFillMode: "forwards" }}
          data-testid="text-hero-summary"
        >
          7+ years crafting scalable component architectures, reusable UI systems, and 
          high-performance enterprise applications. Driven by ownership, technical direction, 
          and elevating UI quality across complex platforms.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-4"
          style={{ animationFillMode: "forwards" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            data-testid="button-download-resume"
          >
            <a href="#" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#skills")}
          className="text-muted-foreground hover:text-foreground transition-colors p-2"
          aria-label="Scroll to skills section"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

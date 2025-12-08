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
          className="relative overflow-hidden min-h-[80vh] flex items-center py-16 md:py-24"
          data-testid="section-hero"
      >
        {/* Background organic shapes */}
        <div className="pointer-events-none absolute inset-0">
          <OrganicBlob className="top-[-6rem] right-[-10rem] h-[22rem] w-[22rem] text-primary" />
          <OrganicBlob className="bottom-[-8rem] left-[-10rem] h-[24rem] w-[24rem] text-emerald-500" />
        </div>

        {/* Gradient overlay for subtle depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/80 via-background to-background/60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          {/* Left column – text */}
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary tracking-wide">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Senior Frontend Engineer · UI/UX · Angular</span>
            </div>

            <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                data-testid="text-hero-heading"
            >
              Hey, I&apos;m{" "}
              <span className="text-primary">
              Sidharth
            </span>
              .
              <br className="hidden sm:block" />
              I design & build flowing UIs.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Senior Frontend / UI Engineer with 10+ years of experience, 6+ years in Angular.
              I design systems, not just screens—component-driven architecture, accessible UX,
              and performance-focused experiences for enterprise products.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  data-testid="button-view-projects"
              >
                View projects
              </Button>

              <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-contact"
              >
                <a href="mailto:sidharthsonar1111@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
              </Button>

              <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="gap-2"
                  data-testid="button-download-resume"
              >
                {/* TODO: Replace # with your actual public resume link (Drive / Naukri / PDF URL) */}
                <a href="#" target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" />
                  Download resume
                </a>
              </Button>
            </div>

            {/* Sub note */}
            <p className="text-xs sm:text-sm text-muted-foreground/90 pt-1">
              Focus areas: Angular architecture, design systems, theming, complex dashboards,
              and financial / logistics products with clean UX.
            </p>
          </div>

          {/* Right column – visual card */}
          <div className="relative w-full max-w-md self-stretch lg:self-auto">
            <div className="relative h-full">
              <div className="rounded-3xl border border-primary/10 bg-card/80 shadow-lg shadow-emerald-900/5 backdrop-blur-sm p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">
                  Flow of Nature
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-card-foreground">
                  Frontend that feels natural,
                  <br className="hidden sm:block" />
                  performs like engineering.
                </h2>

                <p className="text-sm text-muted-foreground mb-6">
                  I work end-to-end across UI architecture, responsive layouts, and UX details:
                  from Figma handoff to production-ready Angular implementations with reusable
                  component libraries.
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-[11px] font-medium text-muted-foreground mb-1">
                      Core Stack
                    </p>
                    <p className="font-semibold text-sm">
                      Angular · TypeScript
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      RxJS, state management, lazy loading, clean API layers.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-[11px] font-medium text-muted-foreground mb-1">
                      UI / UX
                    </p>
                    <p className="font-semibold text-sm">
                      Design-systems mindset
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Theming, animations, accessibility, enterprise-ready layouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
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

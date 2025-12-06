import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    name: "Arthakosh",
    description: "Financial invoicing platform with enterprise-grade Angular architecture",
    role: "Lead Frontend Developer",
    contributions: [
      "Built reusable Angular component library",
      "Optimized UX flows reducing support issues by 40%",
      "Implemented performance improvements boosting adoption rates",
    ],
    tech: ["Angular 17", "TypeScript", "RxJS", "SCSS", "Design System"],
  },
  {
    name: "Invoice & Payout System",
    description: "Comprehensive billing and payment processing module for container logistics",
    role: "Senior Frontend Engineer",
    contributions: [
      "Architected modular invoice generation system",
      "Built TDS calculation and compliance workflows",
      "Created pixel-perfect responsive UI from Figma designs",
    ],
    tech: ["Angular 15", "Reactive Forms", "REST APIs", "Lazy Loading"],
  },
  {
    name: "GRN/SRN Workflow",
    description: "Goods Receipt and Service Receipt automation platform",
    role: "Frontend Architect",
    contributions: [
      "Designed workflow automation UI reducing manual effort 30%",
      "Implemented real-time validation and error handling",
      "Built custom form components with complex validation",
    ],
    tech: ["Angular", "RxJS Signals", "State Management", "CSS Animations"],
  },
  {
    name: "Purchase Order Module",
    description: "End-to-end purchase order management with approval workflows",
    role: "Senior Frontend Developer",
    contributions: [
      "Created multi-step approval workflow UI",
      "Optimized Change Detection for 30-40% performance gain",
      "Implemented caching strategies for faster load times",
    ],
    tech: ["Angular 13", "TypeScript", "Theming", "Performance Optimization"],
  },
  {
    name: "Bolt & Sharp Themes",
    description: "Enterprise design system themes reducing UI development time",
    role: "UI/UX Lead",
    contributions: [
      "Designed and implemented product themes",
      "Reduced UI development time by 25-30%",
      "Created comprehensive theming documentation",
    ],
    tech: ["SCSS", "CSS Variables", "Design Tokens", "Angular Material"],
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-testid="text-projects-heading"
          >
            Highlighted Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key projects showcasing architecture, performance optimization, and UI excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`hover-elevate transition-all duration-300 flex flex-col ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
              data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {project.role}
                    </CardDescription>
                  </div>
                  <div className="shrink-0 p-2 rounded-md bg-primary/10 text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

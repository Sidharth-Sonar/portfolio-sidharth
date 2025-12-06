import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Component, Zap, Users } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const principles = [
  {
    icon: Lightbulb,
    title: "UI/UX Decisions",
    description:
      "Every interface decision starts with user needs. I focus on intuitive flows, clear visual hierarchy, and accessibility. Design-to-code translation is precise—pixel-perfect implementations that respect the original vision while optimizing for performance.",
  },
  {
    icon: Component,
    title: "Component Architecture",
    description:
      "I build component libraries that scale. Emphasis on reusability, clear APIs, and separation of concerns. State management patterns that keep components predictable and testable. Design system thinking from day one.",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description:
      "Performance is not an afterthought. Change Detection optimization, lazy loading, memoization, and efficient rendering are built into the architecture. I profile, measure, and iterate to ensure sub-second interactions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Frontend is where design meets backend. I bridge gaps—working closely with designers to refine interactions, and with backend teams on API contracts. Clear communication and documentation enable smooth handoffs.",
  },
];

export function ApproachSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="approach"
      ref={ref}
      className="py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-testid="text-approach-heading"
          >
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Principles that guide my approach to building exceptional frontend experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={principle.title}
              className={`hover-elevate transition-all duration-300 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
              data-testid={`card-approach-${principle.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

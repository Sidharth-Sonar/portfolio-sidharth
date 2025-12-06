import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Layers, Wrench } from "lucide-react";
import { WaveDivider } from "../wave-divider";
import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "Angular 2-17",
      "TypeScript",
      "JavaScript ES6+",
      "RxJS",
      "Signals",
      "Reactive Forms",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: [
      "Responsive UI",
      "Component-driven UI",
      "Design Systems",
      "Figma-to-Angular",
      "Theming",
      "Micro-Interactions",
      "CSS Animations",
      "Accessibility",
    ],
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: [
      "State Management",
      "Lazy Loading",
      "Module Optimization",
      "High-performance Rendering",
      "API Integration Patterns",
      "Reusable Component Libraries",
      "Clean Code Practices",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "Postman",
      "Jira",
      "REST APIs",
      "Node.js",
      "Chrome DevTools",
      "Performance Profiling",
    ],
  },
];

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <>
      <WaveDivider />
      <section
        id="skills"
        ref={ref}
        className="py-20 md:py-28 bg-card"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-testid="text-skills-heading"
            >
              Skills & Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit refined over 7+ years of building enterprise-grade applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className={`hover-elevate transition-all duration-300 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
                data-testid={`card-skills-${category.title.toLowerCase()}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <category.icon className="h-5 w-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm font-medium"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip />
    </>
  );
}

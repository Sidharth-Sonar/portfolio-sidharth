import { useInView } from "@/hooks/use-in-view";
import { WaveDivider } from "../wave-divider";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Sarjak Container Pvt. Ltd.",
    location: "Mumbai",
    role: "Senior Software Developer",
    duration: "Jul 2022 – Present",
    highlights: [
      "Led Angular 13-17 development ensuring enterprise-grade UI/UX consistency",
      "Built component libraries, design system components, and scalable layouts",
      "Improved performance 30-40% via Change Detection optimization, lazy loading, and caching",
      "Designed product themes (Bolt, Sharp) reducing UI development time 25-30%",
    ],
  },
  {
    company: "Capita India Pvt. Ltd.",
    location: "Mumbai",
    role: "Senior Executive",
    duration: "Aug 2016 – Jun 2022",
    highlights: [
      "Developed enterprise applications using Angular, Bootstrap, Node.js, and Express",
      "Built dashboards, workflow modules, and automation systems for internal operations",
      "Reduced system failure rate by 70% through structured testing and performance tuning",
      "Improved UI/UX across customer-facing portals using modern design patterns",
    ],
  },
  {
    company: "Sutherland Global Services",
    location: "Navi Mumbai",
    role: "Technical Support Consultant",
    duration: "Aug 2015 – Apr 2016",
    highlights: [
      "Provided remote diagnostics and technical support for enterprise software",
      "Ensured smooth system operations across client environments",
    ],
  },
  {
    company: "WIPRO",
    location: "Navi Mumbai",
    role: "Associate - Customer Service",
    duration: "Dec 2014 – Aug 2015",
    highlights: [
      "Managed billing, service updates, and issue resolution for premium clients",
      "Developed strong client communication and problem-solving skills",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <>
      <WaveDivider />
      <section
        id="experience"
        ref={ref}
        className="py-20 md:py-28 bg-card"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-testid="text-experience-heading"
            >
              Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of growth from technical support to frontend architecture
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "forwards",
                  }}
                  data-testid={`timeline-item-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                    <div className="ml-12 md:ml-0 p-6 rounded-lg bg-background border border-border shadow-sm hover-elevate transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-primary font-medium flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 shrink-0">
                              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider flip />
    </>
  );
}

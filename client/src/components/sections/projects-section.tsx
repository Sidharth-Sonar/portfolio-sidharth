import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, ArrowRight, CheckCircle, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

interface Project {
  name: string;
  description: string;
  role: string;
  contributions: string[];
  tech: string[];
  caseStudy: {
    challenge: string;
    approach: string;
    solution: string[];
    results: string[];
    technicalDetails: string;
  };
}

const projects: Project[] = [
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
    caseStudy: {
      challenge: "The existing invoicing system had a fragmented UI with inconsistent components across modules, leading to high support ticket volume and slow feature development cycles.",
      approach: "I led the initiative to build a unified component library while simultaneously refactoring the core invoicing workflows to improve usability.",
      solution: [
        "Architected a reusable component library with 40+ Angular components following atomic design principles",
        "Implemented smart form validation with real-time error feedback",
        "Created a theming system allowing for white-label customization",
        "Optimized bundle size through lazy loading and tree shaking",
      ],
      results: [
        "40% reduction in support tickets related to UI confusion",
        "Development velocity increased by 35% with reusable components",
        "Page load time reduced from 4.2s to 1.8s",
        "User adoption rate increased by 25% post-redesign",
      ],
      technicalDetails: "Built with Angular 17 using standalone components, Signals for reactive state management, and a custom design token system. Implemented comprehensive unit testing with Jest achieving 85% code coverage.",
    },
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
    caseStudy: {
      challenge: "The container logistics company needed a robust invoicing system that could handle complex TDS calculations, multiple payment modes, and compliance requirements specific to the Indian logistics industry.",
      approach: "I designed a modular architecture that separated concerns between invoice generation, tax calculation, and payment processing while maintaining a seamless user experience.",
      solution: [
        "Created a dynamic invoice builder with customizable line items and tax configurations",
        "Implemented automatic TDS calculation engine with configurable tax slabs",
        "Built a real-time payout tracking dashboard with status updates",
        "Developed export functionality for GST-compliant reports",
      ],
      results: [
        "Invoice generation time reduced from 15 minutes to 2 minutes",
        "100% compliance with GST and TDS regulatory requirements",
        "Zero manual intervention needed for standard invoicing workflows",
        "Seamless integration with 3 different payment gateways",
      ],
      technicalDetails: "Utilized Angular Reactive Forms with complex cross-field validation. Implemented a state machine pattern for invoice status management and created custom directives for currency formatting and tax calculations.",
    },
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
    caseStudy: {
      challenge: "Manual goods receipt processing was error-prone and time-consuming, with discrepancies between ordered and received quantities causing significant operational delays.",
      approach: "I focused on creating an intuitive interface that guided users through the receipt process while implementing smart validation to catch discrepancies early.",
      solution: [
        "Designed a step-by-step wizard interface for GRN/SRN processing",
        "Implemented barcode scanning integration for quick item identification",
        "Created real-time discrepancy alerts with suggested resolution actions",
        "Built batch processing capability for high-volume receipt operations",
      ],
      results: [
        "30% reduction in manual data entry effort",
        "Discrepancy resolution time decreased by 50%",
        "Processing throughput increased by 40%",
        "Error rate dropped from 8% to under 1%",
      ],
      technicalDetails: "Leveraged Angular Signals for fine-grained reactivity and implemented optimistic UI updates for perceived performance. Used web workers for heavy validation computations to maintain UI responsiveness.",
    },
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
    caseStudy: {
      challenge: "The existing purchase order system had performance issues with large datasets and lacked a proper approval workflow, causing bottlenecks in procurement processes.",
      approach: "I conducted a thorough performance audit and redesigned the data handling strategy while implementing a flexible approval workflow system.",
      solution: [
        "Implemented virtual scrolling for handling 10,000+ line items",
        "Created a configurable multi-level approval workflow engine",
        "Built intelligent caching with automatic invalidation strategies",
        "Designed an offline-capable draft system for PO creation",
      ],
      results: [
        "30-40% improvement in rendering performance",
        "Approval cycle time reduced from 3 days to 4 hours average",
        "Page load time improved by 60% with smart caching",
        "Zero data loss with offline draft functionality",
      ],
      technicalDetails: "Applied OnPush change detection strategy throughout the module. Implemented a custom virtual scrolling solution and used IndexedDB for offline data persistence. Optimized RxJS operators to prevent memory leaks.",
    },
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
    caseStudy: {
      challenge: "Multiple products within the organization had inconsistent visual identities, making maintenance difficult and creating a fragmented user experience across the product suite.",
      approach: "I led the design system initiative to create flexible, maintainable themes that could be applied across all products while allowing for product-specific customization.",
      solution: [
        "Developed a design token architecture with semantic naming conventions",
        "Created two flagship themes: Bolt (modern/energetic) and Sharp (professional/clean)",
        "Built a theme switching mechanism with smooth transitions",
        "Authored comprehensive documentation with live examples",
      ],
      results: [
        "25-30% reduction in UI development time across all products",
        "Consistent brand experience across 5 different products",
        "Theme customization time reduced from weeks to hours",
        "Developer onboarding time for UI work cut by 50%",
      ],
      technicalDetails: "Built on CSS custom properties with SCSS compilation for browser compatibility. Created Angular schematics for theme generation and implemented a real-time theme preview tool for designers.",
    },
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onViewDetails: () => void;
}

function ProjectCard({ project, index, isInView, onViewDetails }: ProjectCardProps) {
  return (
    <Card
      className={`hover-elevate transition-all duration-300 flex flex-col cursor-pointer ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "forwards",
      }}
      onClick={onViewDetails}
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
      <CardFooter className="pt-4 border-t border-border flex flex-col gap-4 items-start">
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
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-center gap-2"
          data-testid={`button-view-details-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="modal-project-details">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 pr-8">
            <div>
              <Badge variant="outline" className="mb-2">{project.role}</Badge>
              <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
              <DialogDescription className="mt-2">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Target className="h-5 w-5" />
              <h3 className="font-semibold text-lg">The Challenge</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-7">
              {project.caseStudy.challenge}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-semibold text-lg">My Approach</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-7">
              {project.caseStudy.approach}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Solution</h3>
            </div>
            <ul className="space-y-2 pl-7">
              {project.caseStudy.solution.map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Results & Impact</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
              {project.caseStudy.results.map((result, i) => (
                <div
                  key={i}
                  className="p-3 rounded-md bg-primary/5 border border-primary/10"
                >
                  <p className="text-sm font-medium text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="font-semibold text-lg mb-3">Technical Details</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.caseStudy.technicalDetails}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

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
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isInView={isInView}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

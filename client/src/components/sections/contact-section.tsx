import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { WaveDivider, OrganicBlob } from "../wave-divider";
import { useInView } from "@/hooks/use-in-view";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sidharthsonar1111@gmail.com",
    href: "mailto:sidharthsonar1111@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8169331062",
    href: "tel:+918169331062",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/sidharth-sonar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View on GitHub",
    href: "https://github.com/sidharth-sonar",
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <>
      <WaveDivider />
      <section
        id="contact"
        ref={ref}
        className="relative py-20 md:py-28 bg-card overflow-hidden"
      >
        <OrganicBlob className="text-primary w-72 h-72 -bottom-20 -left-20" />
        <OrganicBlob className="text-accent w-56 h-56 -top-10 -right-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-testid="text-contact-heading"
            >
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open to discussing frontend architecture, UI engineering challenges, or new opportunities
            </p>
          </div>

          <div className={`flex items-center justify-center gap-2 mb-10 text-muted-foreground ${isInView ? "animate-fade-in-up stagger-1" : "opacity-0"}`}>
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Navi Mumbai, India</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((contact, index) => (
              <Card
                key={contact.label}
                className={`hover-elevate transition-all duration-300 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(index + 1) * 0.1}s`,
                  animationFillMode: "forwards",
                }}
                data-testid={`card-contact-${contact.label.toLowerCase()}`}
              >
                <CardContent className="p-6">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                    data-testid={`link-contact-${contact.label.toLowerCase()}`}
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-0.5">
                        {contact.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`mt-12 text-center ${isInView ? "animate-fade-in-up stagger-5" : "opacity-0"}`}
            style={{ animationFillMode: "forwards" }}
          >
            <Button size="lg" asChild data-testid="button-send-email">
              <a href="mailto:sidharthsonar1111@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

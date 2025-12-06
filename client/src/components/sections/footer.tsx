import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary" /> using React & Tailwind CSS
          </p>
          <p>
            {currentYear} Sidharth Sonar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

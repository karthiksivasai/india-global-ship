import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package, Search } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Track Package", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 font-bold text-xl text-foreground hover:text-secondary transition-colors">
            <Package className="h-10 w-10 text-secondary" />
            <span className="text-secondary">Vamshi International</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  isActive(item.href) 
                    ? "text-secondary border-b-2 border-secondary pb-1" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="track" size="sm" asChild>
              <Link to="/tracking">
                <Search className="h-4 w-4 mr-2" />
                Quick Track
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="flex items-center space-x-3 font-bold text-xl text-foreground mb-6">
                  <Package className="h-10 w-10 text-secondary" />
                  <span className="text-secondary">Vamshi International</span>
                </Link>
                
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-semibold py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-secondary text-secondary-foreground shadow-feature"
                        : "text-foreground hover:bg-muted hover:text-secondary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button variant="track" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/tracking">
                      <Search className="h-4 w-4 mr-2" />
                      Quick Track
                    </Link>
                  </Button>
                  <Button variant="hero" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
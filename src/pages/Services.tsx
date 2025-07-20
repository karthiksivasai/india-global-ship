import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Plane, Clock, Shield, Utensils, Heart, FileText, ShirtIcon, PillIcon, Gift } from "lucide-react";

const Services = () => {
  const destinations = [
    "United States", "United Kingdom", "Singapore", "Australia", 
    "Canada", "UAE", "Malaysia", "Germany", "New Zealand"
  ];

  const services = [
    {
      icon: Utensils,
      title: "Pickle & Food Items Shipping",
      description: "Send homemade pickles, snacks, sweets, and traditional foods with our special food-safe packaging.",
      features: ["Spill-proof containers", "Temperature controlled", "Custom clearance assistance"],
      discount: "Up to 30% off to USA",
      popular: true
    },
    {
      icon: ShirtIcon,
      title: "Clothing & Apparel",
      description: "Traditional wear, winter clothing, kids' apparel - we handle all textile shipments with care.",
      features: ["Vacuum packaging available", "Wrinkle-free delivery", "Size-based pricing"],
      discount: null,
      popular: false
    },
    {
      icon: PillIcon,
      title: "Medicine Courier Service",
      description: "Approved OTC medicines and health supplements with proper documentation handling.",
      features: ["Prescription verification", "Temperature monitoring", "Express delivery"],
      discount: null,
      popular: false
    },
    {
      icon: Gift,
      title: "Gifts & Festival Hampers",
      description: "Diwali gifts, Raksha Bandhan hampers, New Year presents - spreading joy across borders.",
      features: ["Festival-themed packaging", "Gift wrapping service", "Greeting card inclusion"],
      discount: "Festival special rates",
      popular: true
    },
    {
      icon: Package,
      title: "Excess Baggage Courier",
      description: "Perfect for NRIs and students - send extra luggage without airline baggage fees.",
      features: ["Door-to-door pickup", "No weight restrictions", "Student discounts"],
      discount: null,
      popular: false
    },
    {
      icon: FileText,
      title: "Document Delivery",
      description: "Fast and secure document shipment with tracking and insurance coverage.",
      features: ["Express 3-5 day delivery", "Digital proof of delivery", "Insurance included"],
      discount: null,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive courier solutions designed specifically for Indian customers 
                shipping to family and friends worldwide.
              </p>
              
              {/* Destinations */}
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {destinations.map((country) => (
                  <Badge key={country} variant="secondary" className="px-3 py-1">
                    <Plane className="h-3 w-3 mr-1" />
                    {country}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="relative hover:shadow-feature transition-all duration-300 hover:-translate-y-1">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  )}
                  {service.discount && (
                    <Badge className="absolute -top-2 right-4 bg-warning text-warning-foreground">
                      {service.discount}
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="service" className="w-full">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground">
                Complete shipping solutions for all your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-lg shadow-card">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Free Pickup Service</h3>
                <p className="text-sm text-muted-foreground">
                  Free pickup available in major Indian cities including Delhi, Mumbai, Bangalore, and more.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-card">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Custom Packaging</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized packaging for fragile items, liquids, and temperature-sensitive goods.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-card">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Insurance Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive insurance options to protect your valuable shipments during transit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
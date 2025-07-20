import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Globe, 
  Shield, 
  Clock, 
  Search, 
  Plane, 
  Star,
  CheckCircle,
  Utensils,
  FileText,
  ShirtIcon,
  Gift,
  Users,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const { toast } = useToast();

  const handleQuickTrack = () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Enter tracking number",
        description: "Please enter a valid tracking number to track your package.",
        variant: "destructive",
      });
      return;
    }
    // Redirect to tracking page with the number
    window.location.href = `/tracking?number=${trackingNumber}`;
  };

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Ship to 25+ countries including USA, UK, Singapore, Australia"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Advanced packaging and real-time tracking for complete peace of mind"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Express delivery options with 3-7 days international shipping"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 customer support team ready to assist with your shipments"
    }
  ];

  const services = [
    {
      icon: Utensils,
      title: "Food & Pickles",
      description: "Homemade pickles, snacks & traditional foods",
      popular: true,
      discount: "30% off to USA"
    },
    {
      icon: ShirtIcon,
      title: "Clothing & Apparel",
      description: "Traditional wear, winter clothing & textiles",
      popular: false,
      discount: null
    },
    {
      icon: FileText,
      title: "Documents",
      description: "Fast & secure document delivery worldwide",
      popular: false,
      discount: null
    },
    {
      icon: Gift,
      title: "Gifts & Hampers",
      description: "Festival gifts & special occasion packages",
      popular: true,
      discount: "Festival rates"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai → New York",
      rating: 5,
      comment: "Sent homemade pickles to my daughter in NYC. Excellent packaging and fast delivery!"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi → London", 
      rating: 5,
      comment: "Very professional service. My documents reached safely and on time."
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad → Sydney",
      rating: 5,
      comment: "Best courier service for sending Indian clothes to Australia. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 animate-fade-in">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Connect India
                  <br />
                  <span className="text-primary-light">to the World</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Send your love across borders with India's most trusted international 
                  courier service. From homemade pickles to important documents - 
                  we deliver what matters most.
                </p>
                
                {/* Quick Track */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold mb-4">Quick Track Your Package</h3>
                  <div className="flex gap-3">
                    <Input
                      placeholder="Enter tracking number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleQuickTrack()}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button onClick={handleQuickTrack} variant="secondary" size="lg">
                      <Search className="h-4 w-4 mr-2" />
                      Track
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="xl" asChild>
                    <Link to="/services">
                      <Package className="h-5 w-5 mr-2" />
                      Explore Services
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                    <Link to="/contact">
                      Get Free Quote
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-2 gap-6 animate-slide-up">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent">50,000+</div>
                    <div className="text-sm text-white/80">Happy Customers</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent">25+</div>
                    <div className="text-sm text-white/80">Countries</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent">99.8%</div>
                    <div className="text-sm text-white/80">Safe Delivery</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent">8+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ... keep existing code (rest of homepage sections) */}
        
        {/* Features Section */}
        <section className="py-16 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Swift Global?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with India's most reliable international courier service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-feature transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Popular Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized shipping solutions for Indian customers worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service, index) => (
                <Card key={index} className="relative hover:shadow-feature transition-all duration-300 hover:-translate-y-1 group">
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
                  
                  <CardContent className="p-6 text-center">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="service" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ship Worldwide
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver to major destinations across the globe
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "United States", "United Kingdom", "Singapore", "Australia", 
                "Canada", "UAE", "Malaysia", "Germany", "New Zealand", 
                "South Africa", "Japan", "Hong Kong", "Thailand"
              ].map((country) => (
                <Badge key={country} variant="secondary" className="px-4 py-2 text-sm">
                  <Plane className="h-3 w-3 mr-2" />
                  {country}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Customer Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from families we've helped connect across continents
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-feature transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-warning fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Ship Worldwide?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free quote for your international shipment today. 
                Our experts are ready to help you send your package safely and securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="xl" asChild>
                  <Link to="/contact">
                    Get Free Quote
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/tracking">
                    <Search className="h-4 w-4 mr-2" />
                    Track Package
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

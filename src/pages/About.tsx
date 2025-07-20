import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Globe, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Swift Global Courier
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connecting India to the world with reliable, secure, and affordable courier services. 
                Your trusted partner for international shipping since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To bridge distances and connect hearts by providing world-class courier services 
                  that enable Indians to share their culture, love, and essentials with family and 
                  friends across the globe.
                </p>
                <p className="text-lg text-muted-foreground">
                  We understand the emotional value of every package - from homemade pickles that 
                  carry the taste of home to important documents that shape futures. Every shipment 
                  is handled with the care it deserves.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">50,000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">25+</h3>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">99.8%</h3>
                  <p className="text-sm text-muted-foreground">Safe Delivery</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-card">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">8+ Years</h3>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just a courier service - we're your global shipping partners
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-feature transition-all duration-300">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">100% Secure</h3>
                <p className="text-muted-foreground">
                  Advanced packaging and tracking ensure your items reach safely and securely.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-feature transition-all duration-300">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Ship to 25+ countries including USA, UK, Singapore, Australia, and more.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-feature transition-all duration-300">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Care</h3>
                <p className="text-muted-foreground">
                  Specialized handling for food items, medicines, documents, and fragile goods.
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

export default About;
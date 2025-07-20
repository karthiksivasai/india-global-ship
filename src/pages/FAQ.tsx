import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Package, Shield, Clock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

const FAQ = () => {
  const faqs = [
    {
      category: "Food & Pickles",
      icon: Package,
      questions: [
        {
          question: "Can I send food or pickles to USA?",
          answer: "Yes! We specialize in shipping homemade pickles, spices, dry fruits, and traditional Indian foods to the USA. We use food-grade packaging and ensure proper customs documentation to avoid any issues at customs."
        },
        {
          question: "How do you package food items to maintain freshness?",
          answer: "We use specialized food-grade containers, vacuum sealing when appropriate, and temperature-controlled shipping for perishable items. Our packaging ensures your homemade items reach their destination fresh and safe."
        },
        {
          question: "Are there any food items I cannot send?",
          answer: "Yes, certain items are restricted including fresh fruits, vegetables, dairy products, meat, and items containing eggs. We can provide a complete list of allowed/restricted items before shipping."
        }
      ]
    },
    {
      category: "Shipping & Delivery", 
      icon: Clock,
      questions: [
        {
          question: "How long does it take for delivery?",
          answer: "Delivery times vary by service: Express (3-5 days), Standard (7-10 days), Economy (10-14 days). USA deliveries typically take 5-7 days via our express service."
        },
        {
          question: "What's the maximum weight I can send?",
          answer: "Our standard service allows up to 30kg per package. For heavier items, we offer excess baggage services with no weight restrictions. Pricing varies based on weight and destination."
        },
        {
          question: "Do you provide door-to-door delivery?",
          answer: "Yes! We offer complete door-to-door service including free pickup from major Indian cities (Delhi, Mumbai, Bangalore, Hyderabad, Chennai) and delivery to the recipient's address abroad."
        }
      ]
    },
    {
      category: "Restricted Items",
      icon: AlertTriangle,
      questions: [
        {
          question: "What items are restricted for international shipping?",
          answer: "Restricted items include: liquids over 100ml, batteries, electronics with lithium batteries, fresh foods, plants, medicines without prescription, currency, jewelry above certain value, and weapons."
        },
        {
          question: "Can I send medicines to USA?",
          answer: "Yes, but only over-the-counter medicines and health supplements with proper documentation. Prescription medicines require special permits. We help with documentation and compliance."
        },
        {
          question: "Are there restrictions on clothing and textiles?",
          answer: "Generally no restrictions on clothing and textiles. However, items made from endangered animal products or certain fabrics may be restricted. We verify before shipping."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: Shield,
      questions: [
        {
          question: "How is shipping cost calculated?",
          answer: "Shipping cost depends on weight, dimensions, destination, and service type. We use volumetric weight calculation. You can get instant quotes on our website or by calling our branches."
        },
        {
          question: "Do you offer discounts for regular customers?",
          answer: "Yes! We offer up to 20% discounts for regular customers, bulk shipments, and during festival seasons. Students and senior citizens get special rates."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, UPI, credit/debit cards, NEFT/RTGS, and online payments. Payment can be made at pickup or online when booking."
        }
      ]
    },
  ];

  const quickLinks = [
    { title: "Track Your Package", link: "/tracking", icon: Package },
    { title: "Get Quote", link: "/contact", icon: MessageCircle },
    { title: "Our Services", link: "/services", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-service">
          <div className="container mx-auto container-spacing">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Get answers to common questions about shipping from India to worldwide destinations. 
                Can't find what you're looking for? Contact our support team.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {quickLinks.map((link) => (
                  <Button key={link.title} variant="outline" asChild>
                    <Link to={link.link}>
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section-spacing">
          <div className="container mx-auto container-spacing">
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <Card key={category.category} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <category.icon className="h-6 w-6 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-enhanced">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="section-spacing bg-muted/50">
          <div className="container mx-auto container-spacing">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our customer support team is here to help you with any queries about international shipping.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center shadow-card hover:shadow-feature transition-all duration-300">
                <CardContent className="card-spacing">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Quick responses for urgent queries
                  </p>
                  <Button variant="outline" className="w-full">
                    Chat Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-feature transition-all duration-300">
                <CardContent className="card-spacing">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our experts
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/contact">Call Us</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-feature transition-all duration-300">
                <CardContent className="card-spacing">
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed support for complex queries
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/contact">Send Email</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto container-spacing">
            <div className="text-center">
              <Badge variant="destructive" className="mb-4">Emergency Support</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">24/7 Emergency Line</h3>
              <p className="text-muted-foreground mb-6">
                For urgent shipment issues or time-sensitive queries
              </p>
              <Button variant="destructive" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +91 99999 88888
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default FAQ;
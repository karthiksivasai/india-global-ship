import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "Food & Pickle Shipping",
      questions: [
        {
          question: "Can I send homemade pickles to the USA?",
          answer: "Yes! We specialize in food item shipping with proper food-safe packaging. We handle all customs documentation for food items to ensure smooth delivery to the USA and other countries."
        },
        {
          question: "What food items are allowed for international shipping?",
          answer: "You can send most homemade items like pickles, dried snacks, sweets, spices, and packaged food items. We cannot ship perishable items, meat products, or items containing dairy. Contact us for specific food item clearance."
        },
        {
          question: "How do you ensure food items don't spoil during transit?",
          answer: "We use specialized food-safe packaging with vacuum sealing for applicable items, moisture control packets, and temperature-resistant containers. Most food shipments reach within 5-7 days to minimize any quality issues."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does international shipping take?",
          answer: "Delivery times vary by destination: USA & Canada (5-7 days), UK & Europe (6-8 days), Singapore & Australia (4-6 days), UAE & Middle East (3-5 days). Express options available for faster delivery."
        },
        {
          question: "Do you provide free pickup service?",
          answer: "Yes! We offer free pickup service in major cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and Gurgaon. For other cities, minimal pickup charges may apply."
        },
        {
          question: "Can I track my package in real-time?",
          answer: "Absolutely! Every shipment gets a unique tracking number. You can track your package in real-time on our website or via SMS/email updates throughout the journey."
        },
        {
          question: "What happens if my package gets damaged or lost?",
          answer: "All our shipments include basic insurance. For valuable items, we recommend purchasing additional insurance. In case of damage or loss, we'll investigate and compensate according to our insurance policy."
        }
      ]
    },
    {
      category: "Medicine & Health Products",
      questions: [
        {
          question: "Can I send medicines internationally?",
          answer: "We can ship over-the-counter (OTC) medicines and health supplements. Prescription medicines require proper documentation and approval. We handle all necessary customs paperwork for medical shipments."
        },
        {
          question: "What documentation is required for medicine shipping?",
          answer: "For OTC medicines, we need a copy of the medicine packaging showing ingredients. For prescription medicines, you'll need a doctor's prescription and import permit from the destination country."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How is shipping cost calculated?",
          answer: "Shipping cost depends on package weight, dimensions, destination, and service type. We offer competitive rates starting from ₹1,200 for documents and ₹2,500 for packages to most countries."
        },
        {
          question: "Do you offer any discounts?",
          answer: "Yes! We offer up to 30% discount on food item shipping to USA, student discounts for excess baggage, and bulk shipping discounts for businesses. Festival season special rates are also available."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash on pickup, online payment via UPI, credit/debit cards, net banking, and digital wallets. Corporate customers can also opt for credit terms."
        }
      ]
    },
    {
      category: "Customs & Documentation",
      questions: [
        {
          question: "Do I need to worry about customs clearance?",
          answer: "No! We handle all customs documentation and clearance procedures. Our team is experienced with international shipping regulations and will ensure your package clears customs smoothly."
        },
        {
          question: "What documents are required for international shipping?",
          answer: "Basic requirements include recipient's address proof, sender's ID proof, and detailed contents declaration. Additional documents may be needed for specific items like medicines or electronics."
        },
        {
          question: "Are there any items that cannot be shipped?",
          answer: "We cannot ship prohibited items like weapons, explosives, liquids in large quantities, batteries, and certain electronics. Perishable food items and live animals are also not accepted."
        }
      ]
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
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our courier services, 
                shipping policies, and international delivery options.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`item-${categoryIndex}-${faqIndex}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left font-medium hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2 pb-4">
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

        {/* Still Have Questions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find what you're looking for? Our support team is here to help you 
                with any specific questions about your shipping needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: +91 98765 43210
                </Button>
              </div>

              <div className="mt-8 p-4 bg-card rounded-lg border-l-4 border-l-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Quick Tip:</strong> For faster assistance, 
                  have your tracking number ready when contacting support about existing shipments.
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

export default FAQ;
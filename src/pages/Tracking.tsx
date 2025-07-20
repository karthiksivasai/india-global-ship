import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock tracking data for demo
      if (trackingNumber.toLowerCase().includes("demo") || trackingNumber === "SGC123456789") {
        setTrackingData({
          trackingNumber: trackingNumber,
          status: "In Transit",
          destination: "New York, USA",
          estimatedDelivery: "March 25, 2024",
          events: [
            {
              date: "March 20, 2024",
              time: "10:30 AM",
              location: "Delhi Sorting Facility",
              status: "Package received and processed",
              completed: true
            },
            {
              date: "March 21, 2024",
              time: "02:15 PM",
              location: "IGI Airport Delhi",
              status: "Departed from India",
              completed: true
            },
            {
              date: "March 22, 2024",
              time: "08:45 AM",
              location: "JFK Airport New York",
              status: "Arrived in destination country",
              completed: true
            },
            {
              date: "March 23, 2024",
              time: "11:20 AM",
              location: "New York Distribution Center",
              status: "In transit to delivery facility",
              completed: false
            },
            {
              date: "March 25, 2024",
              time: "Expected",
              location: "Final Destination",
              status: "Out for delivery",
              completed: false
            }
          ]
        });
      } else {
        setTrackingData(null);
        toast({
          title: "Not Found",
          description: "No tracking information found for this number. Please check and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <Package className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Track Your Package
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Enter your tracking number below to get real-time updates on your shipment
              </p>
              
              {/* Tracking Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleTrack}
                  disabled={isLoading}
                  variant="track"
                  size="lg"
                >
                  <Search className="h-4 w-4 mr-2" />
                  {isLoading ? "Tracking..." : "Track"}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Try tracking with: <code className="bg-muted px-2 py-1 rounded">SGC123456789</code>
              </p>
            </div>
          </div>
        </section>

        {/* Tracking Results */}
        {trackingData && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-feature">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">Tracking: {trackingData.trackingNumber}</CardTitle>
                        <p className="text-muted-foreground">Destination: {trackingData.destination}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-sm">
                          {trackingData.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          ETA: {trackingData.estimatedDelivery}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground">Tracking History</h3>
                      
                      <div className="space-y-4">
                        {trackingData.events.map((event, index) => (
                          <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                            <div className="flex-shrink-0">
                              {event.completed ? (
                                <CheckCircle className="h-6 w-6 text-accent" />
                              ) : (
                                <Clock className="h-6 w-6 text-muted-foreground" />
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                  <p className="font-medium text-foreground">{event.status}</p>
                                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {event.location}
                                  </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <p>{event.date}</p>
                                  <p>{event.time}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Help Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find your tracking information or have questions about your shipment?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  FAQ
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

export default Tracking;
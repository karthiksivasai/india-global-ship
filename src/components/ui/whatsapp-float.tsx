import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "+919876543210"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I need help with courier services to USA.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={handleWhatsAppClick}
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </Button>
      
      {/* Pulse animation for attention */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;
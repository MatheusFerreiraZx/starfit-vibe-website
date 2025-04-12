
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de saber mais sobre os produtos da StarFit.",
  className 
}) => {
  const handleClick = () => {
    // Format phone number (remove any non-numeric characters)
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-2 ${className}`}
    >
      <MessageCircle size={20} />
      <span>Fale conosco</span>
    </Button>
  );
};

export default WhatsAppButton;


import React from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would handle form submission here
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="starfit-container">
          <h1 className="text-3xl md:text-4xl font-bold text-starfit-wine text-center mb-2">
            Entre em Contato
          </h1>
          <p className="text-center text-starfit-gray mb-12 max-w-2xl mx-auto">
            Estamos sempre disponíveis para ajudar. Entre em contato conosco através de qualquer 
            um dos canais abaixo ou preencha o formulário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-starfit-wine mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-starfit-wine mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-starfit-gray">Endereço</h3>
                      <p className="text-starfit-gray">Recife, PE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-starfit-wine mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-starfit-gray">Telefone</h3>
                      <p className="text-starfit-gray">(81) 9xxxx-xxxx</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-starfit-wine mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-starfit-gray">Email</h3>
                      <p className="text-starfit-gray">contato@starfit.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-starfit-wine mb-6">Redes Sociais</h2>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-starfit-wine/10 text-starfit-wine p-3 rounded-full hover:bg-starfit-wine hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-starfit-wine/10 text-starfit-wine p-3 rounded-full hover:bg-starfit-wine hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
                
                <div className="mt-8">
                  <WhatsAppButton phoneNumber="5581999999999" className="w-full" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-starfit-wine mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-starfit-gray mb-1">
                    Nome Completo
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Seu nome" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-starfit-gray mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu.email@exemplo.com" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-starfit-gray mb-1">
                    Telefone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-starfit-gray mb-1">
                    Assunto
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Assunto da mensagem" 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-starfit-gray mb-1">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Digite sua mensagem aqui..." 
                    rows={5} 
                    required 
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-starfit-wine hover:bg-starfit-wine/90 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contato;

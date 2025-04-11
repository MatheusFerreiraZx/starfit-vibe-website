
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-starfit-wine text-white">
      <div className="starfit-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-2xl font-bold">
              <span>Star</span>
              <span className="font-light">Fit</span>
            </h2>
            <p className="text-white/80 max-w-md">
              Moda fitness para todos os corpos. Do P ao Plus Size, roupas para academia, 
              corrida e outras atividades físicas com qualidade e estilo.
            </p>
            <div className="flex space-x-3 mt-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">Início</a></li>
              <li><a href="#categories" className="text-white/80 hover:text-white transition-colors">Categorias</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <MapPin className="mr-2 h-5 w-5 text-white/60" />
                <span>São Paulo, SP</span>
              </p>
              <p className="flex items-center text-white/80">
                <Phone className="mr-2 h-5 w-5 text-white/60" />
                <span>(11) 9xxxx-xxxx</span>
              </p>
              <p className="flex items-center text-white/80">
                <Mail className="mr-2 h-5 w-5 text-white/60" />
                <span>contato@starfit.com</span>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Receba nossas novidades</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                />
                <Button className="ml-2 bg-white text-starfit-wine hover:bg-white/90">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} StarFit by Franciele Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

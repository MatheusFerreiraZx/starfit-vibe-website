
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-starfit-wine text-white">
      <div className="starfit-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-white mr-2 fill-white" />
              <h2 className="text-2xl font-bold">
                <span>Star</span>
                <span className="font-light">Fit</span>
              </h2>
            </div>
            <p className="text-white/80 max-w-md">
              Moda fitness para todos os corpos. Do P ao Plus Size, roupas para academia, 
              corrida e outras atividades físicas com qualidade e estilo.
            </p>
            <div className="flex space-x-3 mt-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="text-white/80 hover:text-white transition-colors">Coleções</Link></li>
              <li><Link to="/#about" className="text-white/80 hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="text-white/80 hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <MapPin className="mr-2 h-5 w-5 text-white/60" />
                <span>Recife, PE</span>
              </p>
              <p className="flex items-center text-white/80">
                <Phone className="mr-2 h-5 w-5 text-white/60" />
                <span>(81) 9xxxx-xxxx</span>
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30 rounded-l-full"
                />
                <Button className="rounded-r-full bg-white text-starfit-wine hover:bg-white/90">
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

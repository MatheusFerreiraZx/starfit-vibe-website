
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-starfit-lightPink py-12 md:py-20">
      <div className="starfit-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-starfit-wine font-display">
              Moda fitness para todos os corpos
            </h1>
            <p className="text-lg text-starfit-gray">
              Do tamanho P ao Plus Size, roupas de alta qualidade para academia, corrida e mais. 
              Vista-se com estilo e conforto na StarFit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary py-6 px-8 text-base">
                Comprar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="py-6 px-8 text-base text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink hover:text-starfit-wine">
                Ver coleção
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-starfit-wine rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-starfit-wine rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1596357395916-c7ec0456c825?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Mulher em roupas fitness" 
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10 animate-pulse-subtle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

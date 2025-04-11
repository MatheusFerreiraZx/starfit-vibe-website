
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-starfit-lightPink to-white py-12 md:py-20">
      <div className="starfit-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-starfit-wine font-display">
              Moda fitness para cada curva
            </h1>
            <p className="text-lg text-starfit-gray">
              Do tamanho P ao Plus Size, roupas de alta qualidade feitas para valorizar seu corpo em cada movimento. 
              Vista-se com elegância, estilo e conforto na StarFit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary py-6 px-8 text-base group">
                Comprar agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-base text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink hover:text-starfit-wine group"
              >
                Nova coleção
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-starfit-wine rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-starfit-wine rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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

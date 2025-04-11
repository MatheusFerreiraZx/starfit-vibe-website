
import React from 'react';
import { Heart, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-8 w-8 text-starfit-wine" />,
    title: "Feito com Amor",
    description: "Cada peça é selecionada com carinho e atenção aos detalhes."
  },
  {
    icon: <Award className="h-8 w-8 text-starfit-wine" />,
    title: "Qualidade Garantida",
    description: "Materiais de alta qualidade para maior durabilidade e conforto."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-starfit-wine" />,
    title: "Tendências Atuais",
    description: "Estamos sempre atualizados com as últimas tendências fitness."
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="starfit-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-starfit-lightPink rounded-full opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Franciele Silva" 
              className="relative z-10 rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="section-title">Sobre a StarFit</h2>
            <p className="text-starfit-gray text-lg">
              A StarFit nasceu do desejo de proporcionar moda fitness de qualidade para mulheres de todos os tipos de corpo. 
              Nossa missão é oferecer peças que combinam conforto, estilo e funcionalidade, permitindo que você se sinta 
              confiante em qualquer atividade física.
            </p>
            <p className="text-starfit-gray text-lg">
              Atendemos desde o tamanho P até o Plus Size, porque acreditamos que todas as mulheres merecem 
              roupas bonitas e confortáveis para praticar seus exercícios favoritos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-starfit-wine">{feature.title}</h3>
                  <p className="text-starfit-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

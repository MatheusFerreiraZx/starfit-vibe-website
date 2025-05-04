
import React from 'react';
import { Heart, Award, Star } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-8 w-8 text-starfit-wine" />,
    title: "Feito com Amor",
    description: "Cada peça é selecionada com carinho e atenção aos detalhes."
  },
  {
    icon: <Award className="h-8 w-8 text-starfit-wine" />,
    title: "Qualidade Premium",
    description: "Materiais de alta qualidade para maior durabilidade e conforto."
  },
  {
    icon: <Star className="h-8 w-8 text-starfit-wine" />,
    title: "Estilo Único",
    description: "Designs exclusivos que valorizam todos os tipos de corpo."
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
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Moda Fitness" 
              className="relative z-10 rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="section-title">Nossa História</h2>
            <div className="space-y-4 text-starfit-gray">
              <p className="text-lg leading-relaxed">
                A StarFit nasceu de uma paixão pelo universo fitness e do desejo de proporcionar 
                experiências transformadoras através da moda esportiva. O que começou como um pequeno sonho
                rapidamente se transformou em uma marca dedicada ao bem-estar e autoconfiança de cada cliente.
              </p>
              <p className="text-lg leading-relaxed">
                "Quando nos dedicamos à prática de exercícios, não é apenas o corpo que se transforma, mas também
                nossa autoestima, nossa confiança e nossa forma de ver o mundo", é nessa filosofia que baseamos nosso 
                trabalho diário na StarFit.
              </p>
              <p className="text-lg leading-relaxed">
                Com um olhar atento às necessidades de mulheres reais, a StarFit foi criada com a missão de oferecer
                roupas que combinam conforto, qualidade e estilo para todos os tipos de corpo. Do tamanho P ao Plus Size,
                cada peça é pensada para fazer você se sentir incrível em todos os momentos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 bg-starfit-lightPink p-3 rounded-full">{feature.icon}</div>
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

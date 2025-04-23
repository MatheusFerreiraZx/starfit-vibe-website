
import React from 'react';
import Layout from '@/components/Layout';
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
  }
];

const Sobre = () => {
  return (
    <Layout>
      <div className="starfit-container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-starfit-wine mb-8">Sobre a StarFit</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">Nossa História</h2>
              <p className="text-starfit-gray text-lg">
                A StarFit nasceu do desejo de proporcionar moda fitness de qualidade para mulheres 
                de todos os tipos de corpo. Nossa missão é oferecer peças que combinam conforto, 
                estilo e funcionalidade, permitindo que você se sinta confiante em qualquer 
                atividade física.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">Nossa Missão</h2>
              <p className="text-starfit-gray text-lg">
                Queremos democratizar a moda fitness, oferecendo produtos de qualidade que atendam 
                às necessidades de todas as mulheres. Do tamanho P ao Plus Size, acreditamos que 
                todas merecem se sentir bonitas e confortáveis durante seus exercícios.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-4 bg-starfit-lightPink p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-starfit-wine">{feature.title}</h3>
                  <p className="text-starfit-gray">{feature.description}</p>
                </div>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">Nosso Compromisso</h2>
              <p className="text-starfit-gray text-lg">
                Estamos comprometidos com a qualidade, sustentabilidade e satisfação de nossas 
                clientes. Cada peça é cuidadosamente selecionada e testada para garantir o máximo 
                de conforto e durabilidade.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sobre;

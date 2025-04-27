
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
          <h1 className="text-4xl font-bold text-starfit-wine mb-8">Nossa História</h1>
          
          <div className="space-y-8">
            <section className="prose prose-lg">
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">A Jornada da Franciele</h2>
              <p className="text-starfit-gray text-lg leading-relaxed">
                A história da StarFit começou com um sonho e muita determinação. Franciele Cristina, nossa fundadora,
                descobriu no universo fitness muito mais do que exercícios - encontrou um caminho para transformação
                pessoal e autoconhecimento.
              </p>
              <p className="text-starfit-gray text-lg leading-relaxed">
                Há anos, quando iniciou sua jornada fitness, Fran enfrentou os mesmos desafios que muitas mulheres
                encontram: a busca por roupas que fizessem ela se sentir confortável e confiante durante os treinos.
                Foi através de sua própria experiência de transformação que nasceu o desejo de criar algo especial
                para outras mulheres.
              </p>
              <p className="text-starfit-gray text-lg leading-relaxed">
                "Cada treino me mostrava que eu era capaz de superar meus limites, e isso mudou completamente minha
                autoestima e a forma como eu me via. Quero que todas as mulheres possam sentir essa mesma confiança
                e poder", compartilha Franciele com paixão.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">Nossa Missão</h2>
              <p className="text-starfit-gray text-lg leading-relaxed">
                Inspirada por sua própria jornada de transformação, Franciele criou a StarFit com uma missão clara:
                proporcionar roupas fitness que façam todas as mulheres se sentirem poderosas e confiantes, independente
                do seu tipo físico ou estágio em sua jornada fitness.
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
              <h2 className="text-2xl font-semibold text-starfit-gray mb-4">Nossos Valores</h2>
              <p className="text-starfit-gray text-lg leading-relaxed">
                Sob a liderança apaixonada de Franciele, a StarFit se compromete com a qualidade, inclusão e
                bem-estar de nossas clientes. Cada peça é cuidadosamente selecionada pensando no conforto e na
                confiança que queremos proporcionar a todas as mulheres em sua jornada fitness.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sobre;

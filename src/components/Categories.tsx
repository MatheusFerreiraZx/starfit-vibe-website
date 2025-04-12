
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type CategoryCard = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const categories: CategoryCard[] = [
  {
    title: "Roupas P ao M",
    description: "Moda fitness para todos os tipos de corpo",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/produtos"
  },
  {
    title: "Plus Size",
    description: "Conforto e estilo para todas as mulheres",
    image: "https://images.unsplash.com/photo-1596357395916-c7ec0456c825?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/produtos"
  },
  {
    title: "Academia",
    description: "Peças perfeitas para seu treino",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/produtos"
  },
  {
    title: "Corrida",
    description: "Desempenho e estilo para quem corre",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/produtos"
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-12 md:py-16 bg-gray-50">
      <div className="starfit-container">
        <h2 className="section-title text-center">Nossas Coleções</h2>
        <p className="section-subtitle text-center">
          Encontre as melhores peças para seu estilo e bem-estar
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="block">
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-starfit-wine/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>
                    <div className="mt-4 flex items-center text-white text-sm font-medium">
                      <span>Ver coleção</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

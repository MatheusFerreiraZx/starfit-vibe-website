
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

type CategoryCard = {
  title: string;
  description: string;
  image: string;
};

const categories: CategoryCard[] = [
  {
    title: "Roupas P ao M",
    description: "Moda fitness para todos os tipos de corpo",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Plus Size",
    description: "Conforto e estilo para todas as mulheres",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Academia",
    description: "Peças perfeitas para seu treino",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Corrida",
    description: "Desempenho e estilo para quem corre",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="starfit-container">
        <h2 className="section-title text-center">Nossas Categorias</h2>
        <p className="section-subtitle text-center">
          Encontre as melhores peças para seu estilo e necessidade
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-starfit-wine/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center text-white text-sm font-medium">
                    <span>Ver produtos</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

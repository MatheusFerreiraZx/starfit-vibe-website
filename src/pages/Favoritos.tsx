
import React from 'react';
import Layout from '@/components/Layout';
import { useFavorites } from '@/contexts/FavoritesContext';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <Layout>
      <div className="py-8 px-4 md:px-0">
        <div className="starfit-container">
          <h1 className="text-3xl font-bold text-starfit-wine mb-8 font-display">Meus Favoritos</h1>
          
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-starfit-wine mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Sua lista de favoritos está vazia</h2>
              <p className="text-starfit-gray mb-6">
                Adicione produtos aos favoritos para encontrá-los facilmente depois.
              </p>
              <Link to="/produtos">
                <Button className="bg-starfit-wine hover:bg-starfit-wine/90">
                  Ver produtos
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Favoritos;

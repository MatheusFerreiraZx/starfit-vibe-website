
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/use-toast';

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      if (!prev.find(p => p.id === product.id)) {
        toast({
          title: "Produto adicionado aos favoritos",
          description: product.name,
        });
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => {
      const product = prev.find(p => p.id === productId);
      if (product) {
        toast({
          title: "Produto removido dos favoritos",
          description: product.name,
        });
      }
      return prev.filter(p => p.id !== productId);
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some(product => product.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

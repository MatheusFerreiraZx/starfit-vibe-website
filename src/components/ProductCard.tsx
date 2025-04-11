
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from '@/types/product';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/produtos/${product.id}`);
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden">
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {product.featured && (
          <span className="absolute top-2 right-2 bg-starfit-wine text-white text-xs px-2 py-1 rounded">
            Destaque
          </span>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-starfit-wine truncate">{product.name}</h3>
        <p className="text-sm text-starfit-gray line-clamp-2 h-10 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <div className="text-xs text-starfit-gray">
            {product.sizes.join(' · ')}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0">
        <Button 
          onClick={handleViewDetails} 
          className="w-full bg-starfit-wine hover:bg-starfit-wine/90 text-white"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

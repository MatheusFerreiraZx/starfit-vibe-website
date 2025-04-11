
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Star,
  Check
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  if (!product) {
    return (
      <div className="starfit-container py-16 text-center">
        <h2 className="text-2xl text-starfit-wine mb-4">Produto não encontrado</h2>
        <Button 
          onClick={() => navigate('/produtos')} 
          variant="outline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedColor) {
      toast({
        title: "Selecione uma cor",
        description: "Por favor, escolha uma cor antes de adicionar ao carrinho.",
        variant: "destructive"
      });
      return;
    }
    
    addItem(product, selectedSize, selectedColor);
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="py-12 px-4 md:px-0">
      <div className="starfit-container">
        <Button 
          onClick={() => navigate('/produtos')} 
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Features or benefits */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-starfit-wine">Características</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-starfit-wine mr-2" />
                  <span>Material de alta qualidade</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-starfit-wine mr-2" />
                  <span>Secagem rápida</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-starfit-wine mr-2" />
                  <span>Confortável e respirável</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-starfit-wine mr-2" />
                  <span>Produzido no Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-starfit-wine">{product.name}</h1>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-starfit-wine text-starfit-wine" />
              ))}
              <span className="text-sm text-starfit-gray ml-2">(24 avaliações)</span>
            </div>
            
            <p className="text-xl font-bold text-starfit-wine">
              {formatPrice(product.price)}
            </p>
            
            <p className="text-starfit-gray">{product.description}</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tamanho</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map(size => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Cor</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma cor" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map(color => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                className="w-full py-6 bg-starfit-wine hover:bg-starfit-wine/90 text-white"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-starfit-gray">
                <p className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Enviamos para todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

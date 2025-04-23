import React from 'react';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="py-16 px-4 md:px-0">
        <div className="starfit-container max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-24 w-24 text-starfit-wine/20 mb-6" />
            <h2 className="text-2xl font-bold text-starfit-wine mb-2">Seu carrinho está vazio</h2>
            <p className="text-starfit-gray mb-6">Adicione alguns produtos para começar suas compras</p>
            <Button 
              onClick={() => navigate('/produtos')} 
              className="bg-starfit-wine hover:bg-starfit-wine/90 text-white"
            >
              Ver Produtos
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="starfit-container py-8">
        <div className="starfit-container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-starfit-wine mb-8 font-display">Meu Carrinho</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="font-semibold text-lg">Produtos</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Limpar
                  </Button>
                </div>
                
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col md:flex-row gap-4 border-b pb-6">
                    <div className="w-full md:w-24 h-24 overflow-hidden rounded-md">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      
                      <div className="mt-1 text-sm text-starfit-gray">
                        <p>Tamanho: {item.selectedSize}</p>
                        <p>Cor: {item.selectedColor}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md w-32">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 border-r" 
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="flex-1 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 border-l"
                          >
                            +
                          </button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-8">
                <h2 className="font-semibold text-lg border-b pb-4">Resumo do Pedido</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>A calcular</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="text-xs text-starfit-gray text-right">
                      ou em até 10x de {formatPrice(subtotal / 10)} sem juros
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => navigate('/checkout')} 
                  className="w-full py-6 bg-starfit-wine hover:bg-starfit-wine/90 text-white"
                >
                  Finalizar Compra
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/produtos')} 
                  className="w-full"
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

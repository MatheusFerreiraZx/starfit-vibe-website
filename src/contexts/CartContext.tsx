
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string, color: string) => {
    setItems(prevItems => {
      // Check if product with same ID, size and color already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        // Increment quantity of existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        
        toast({
          title: "Produto adicionado",
          description: `Quantidade de ${product.name} atualizada no carrinho.`,
        });
        
        return newItems;
      } else {
        // Add new item
        toast({
          title: "Produto adicionado",
          description: `${product.name} foi adicionado ao carrinho.`,
        });
        
        return [...prevItems, { 
          ...product, 
          quantity: 1, 
          selectedSize: size, 
          selectedColor: color 
        }];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      
      toast({
        title: "Produto removido",
        description: "O item foi removido do carrinho.",
      });
      
      return updatedItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrinho esvaziado",
      description: "Todos os itens foram removidos do carrinho.",
    });
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart, 
        totalItems, 
        subtotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

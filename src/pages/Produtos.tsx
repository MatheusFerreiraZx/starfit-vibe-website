
import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'leggings', name: 'Leggings' },
  { id: 'tops', name: 'Tops' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'camisetas', name: 'Camisetas' },
  { id: 'conjuntos', name: 'Conjuntos' },
  { id: 'casacos', name: 'Casacos' },
  { id: 'acessorios', name: 'Acessórios' }
];

const Produtos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceSort, setPriceSort] = useState('');
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handlePriceSortChange = (value: string) => {
    setPriceSort(value);
  };
  
  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort products based on price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (priceSort === 'lowToHigh') {
      return a.price - b.price;
    } else if (priceSort === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="py-12 px-4 md:px-0">
      <div className="starfit-container">
        <h1 className="text-3xl md:text-4xl font-bold text-starfit-wine mb-8 font-display">
          Nossos Produtos
        </h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 relative">
            <Input
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-starfit-gray h-4 w-4" />
          </div>
          
          <div className="flex gap-4 w-full md:w-1/2">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={priceSort} onValueChange={handlePriceSortChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Ordenar por preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Padrão</SelectItem>
                <SelectItem value="lowToHigh">Menor preço</SelectItem>
                <SelectItem value="highToLow">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-starfit-gray">Nenhum produto encontrado para a sua busca.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Produtos;


import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Layout from '@/components/Layout';

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
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  const handlePriceSortChange = (value: string) => {
    setPriceSort(value);
    setCurrentPage(1);
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceSort('');
    setCurrentPage(1);
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

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="py-8 px-4 md:px-0">
        <div className="starfit-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-starfit-wine font-display">
              Catálogo de Produtos
            </h1>
            
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline" 
              className="flex items-center gap-2 text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
            >
              <Filter size={16} />
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </Button>
          </div>
          
          {showFilters && (
            <div className="mb-8 p-4 bg-white shadow-sm rounded-lg border border-starfit-lightPink/30">
              <div className="flex flex-col md:flex-row gap-4">
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
              
              {(searchQuery || selectedCategory !== 'all' || priceSort) && (
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
                    onClick={handleClearFilters}
                  >
                    <X size={14} className="mr-1" />
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          )}
          
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-starfit-gray">
              Exibindo {sortedProducts.length > 0 ? startIndex + 1 : 0}-
              {Math.min(endIndex, sortedProducts.length)} de {sortedProducts.length} produtos
            </p>
          </div>
          
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        aria-disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                          className={currentPage === i + 1 ? 'bg-starfit-wine text-white border-starfit-wine hover:bg-starfit-wine/90' : ''}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        aria-disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-white shadow-sm rounded-lg">
              <p className="text-lg text-starfit-gray">Nenhum produto encontrado para a sua busca.</p>
              <Button 
                variant="outline" 
                className="mt-4 text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
                onClick={handleClearFilters}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Produtos;

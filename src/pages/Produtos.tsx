
import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X, Sliders } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Layout from '@/components/Layout';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'leggings', name: 'Leggings' },
  { id: 'tops', name: 'Tops' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'camisetas', name: 'Camisetas' },
  { id: 'conjuntos', name: 'Conjuntos' },
  { id: 'casacos', name: 'Casacos' }
];

// Extract all unique sizes and colors from products
const allSizes = Array.from(new Set(products.flatMap(product => product.sizes))).sort();
const allColors = Array.from(new Set(products.flatMap(product => product.colors))).sort();

const priceRanges = [
  { id: 'all', name: 'Todos os preços' },
  { id: 'under50', name: 'Até R$ 50' },
  { id: '50to100', name: 'R$ 50 - R$ 100' },
  { id: '100to150', name: 'R$ 100 - R$ 150' },
  { id: 'over150', name: 'Acima de R$ 150' }
];

const Produtos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState('all');
  const [priceSort, setPriceSort] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
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
  
  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
    setCurrentPage(1);
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: string) => {
    setPriceRange(range);
    setCurrentPage(1);
  };
  
  const handlePriceSortChange = (value: string) => {
    setPriceSort(value);
    setCurrentPage(1);
  };
  
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange('all');
    setPriceSort('');
    setCurrentPage(1);
  };

  const handleRemoveFilter = (type: string, value: string) => {
    if (type === 'category') {
      setSelectedCategory('all');
    } else if (type === 'size') {
      setSelectedSizes(prev => prev.filter(s => s !== value));
    } else if (type === 'color') {
      setSelectedColors(prev => prev.filter(c => c !== value));
    } else if (type === 'price') {
      setPriceRange('all');
    }
    setCurrentPage(1);
  };
  
  // Filter products based on all criteria
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    const matchesSizes = selectedSizes.length === 0 || 
                          selectedSizes.some(size => product.sizes.includes(size));
    
    const matchesColors = selectedColors.length === 0 || 
                          selectedColors.some(color => product.colors.includes(color));
    
    let matchesPriceRange = true;
    if (priceRange === 'under50') {
      matchesPriceRange = product.price < 50;
    } else if (priceRange === '50to100') {
      matchesPriceRange = product.price >= 50 && product.price <= 100;
    } else if (priceRange === '100to150') {
      matchesPriceRange = product.price > 100 && product.price <= 150;
    } else if (priceRange === 'over150') {
      matchesPriceRange = product.price > 150;
    }
    
    return matchesSearch && matchesCategory && matchesSizes && matchesColors && matchesPriceRange;
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

  // Active filters count
  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) + 
    selectedSizes.length + 
    selectedColors.length + 
    (priceRange !== 'all' ? 1 : 0);

  return (
    <Layout>
      <div className="py-8 px-4 md:px-0">
        <div className="starfit-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-starfit-wine font-display">
              Catálogo de Produtos
            </h1>
            
            <div className="flex gap-3">
              <div className="relative w-full md:w-64">
                <Input
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-starfit-gray h-4 w-4" />
              </div>
              
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline" 
                className="hidden md:flex items-center gap-2 text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink whitespace-nowrap"
              >
                <Filter size={16} />
                {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
              </Button>

              <Button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                variant="outline"
                className="md:hidden flex items-center gap-2 text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
              >
                <Sliders size={16} />
                <span className="sr-only">Filtros</span>
                {activeFiltersCount > 0 && (
                  <span className="ml-1 rounded-full bg-starfit-wine text-white w-5 h-5 flex items-center justify-center text-xs">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          {/* Active filters display */}
          {(selectedCategory !== 'all' || selectedSizes.length > 0 || selectedColors.length > 0 || priceRange !== 'all') && (
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center mr-2">
                <span className="text-sm text-starfit-gray">Filtros ativos:</span>
              </div>
              
              {selectedCategory !== 'all' && (
                <Badge variant="outline" className="flex items-center gap-1 bg-starfit-lightPink/20 border-starfit-wine/20">
                  Categoria: {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => handleRemoveFilter('category', selectedCategory)} className="ml-1">
                    <X size={14} />
                  </button>
                </Badge>
              )}
              
              {selectedSizes.map(size => (
                <Badge key={size} variant="outline" className="flex items-center gap-1 bg-starfit-lightPink/20 border-starfit-wine/20">
                  Tamanho: {size}
                  <button onClick={() => handleRemoveFilter('size', size)} className="ml-1">
                    <X size={14} />
                  </button>
                </Badge>
              ))}
              
              {selectedColors.map(color => (
                <Badge key={color} variant="outline" className="flex items-center gap-1 bg-starfit-lightPink/20 border-starfit-wine/20">
                  Cor: {color}
                  <button onClick={() => handleRemoveFilter('color', color)} className="ml-1">
                    <X size={14} />
                  </button>
                </Badge>
              ))}
              
              {priceRange !== 'all' && (
                <Badge variant="outline" className="flex items-center gap-1 bg-starfit-lightPink/20 border-starfit-wine/20">
                  Preço: {priceRanges.find(p => p.id === priceRange)?.name}
                  <button onClick={() => handleRemoveFilter('price', priceRange)} className="ml-1">
                    <X size={14} />
                  </button>
                </Badge>
              )}
              
              <Button 
                variant="link" 
                onClick={handleClearFilters}
                className="text-xs text-starfit-wine hover:text-starfit-wine/80 p-0 h-auto"
              >
                Limpar todos
              </Button>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter sidebar - Desktop */}
            {showFilters && (
              <div className="hidden md:block space-y-6 bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h3 className="font-semibold mb-3 text-starfit-wine">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={selectedCategory === category.id}
                          onCheckedChange={() => handleCategoryChange(category.id)}
                          className="text-starfit-wine border-starfit-wine/30"
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-starfit-wine">Tamanhos</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSizes.includes(size) ? "default" : "outline"}
                        onClick={() => handleSizeToggle(size)}
                        className={`min-w-[40px] h-8 p-0 ${
                          selectedSizes.includes(size) 
                            ? "bg-starfit-wine hover:bg-starfit-wine/90" 
                            : "text-starfit-gray hover:bg-starfit-lightPink/20 hover:text-starfit-wine"
                        }`}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-starfit-wine">Cores</h3>
                  <div className="space-y-2">
                    {allColors.map((color) => (
                      <div key={color} className="flex items-center">
                        <Checkbox 
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => handleColorToggle(color)}
                          className="text-starfit-wine border-starfit-wine/30"
                        />
                        <label 
                          htmlFor={`color-${color}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-starfit-wine">Faixa de Preço</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.id} className="flex items-center">
                        <Checkbox 
                          id={`price-${range.id}`}
                          checked={priceRange === range.id}
                          onCheckedChange={() => handlePriceRangeChange(range.id)}
                          className="text-starfit-wine border-starfit-wine/30"
                        />
                        <label 
                          htmlFor={`price-${range.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {range.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-starfit-wine">Ordenar por</h3>
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
                
                <Button 
                  variant="outline" 
                  onClick={handleClearFilters}
                  className="w-full text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
                >
                  <X size={14} className="mr-1" />
                  Limpar filtros
                </Button>
              </div>
            )}
            
            {/* Mobile Filters Modal */}
            {showMobileFilters && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                <div className="bg-white h-screen w-full max-w-xs p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl">Filtros</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowMobileFilters(false)}
                      className="h-8 w-8 p-0"
                    >
                      <X />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-starfit-wine">Categorias</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <Checkbox 
                              id={`mobile-category-${category.id}`}
                              checked={selectedCategory === category.id}
                              onCheckedChange={() => handleCategoryChange(category.id)}
                              className="text-starfit-wine border-starfit-wine/30"
                            />
                            <label 
                              htmlFor={`mobile-category-${category.id}`}
                              className="ml-2 text-sm cursor-pointer"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-starfit-wine">Tamanhos</h3>
                      <div className="flex flex-wrap gap-2">
                        {allSizes.map((size) => (
                          <Button
                            key={`mobile-${size}`}
                            variant={selectedSizes.includes(size) ? "default" : "outline"}
                            onClick={() => handleSizeToggle(size)}
                            className={`min-w-[40px] h-8 p-0 ${
                              selectedSizes.includes(size) 
                                ? "bg-starfit-wine hover:bg-starfit-wine/90" 
                                : "text-starfit-gray hover:bg-starfit-lightPink/20 hover:text-starfit-wine"
                            }`}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-starfit-wine">Cores</h3>
                      <div className="space-y-2">
                        {allColors.map((color) => (
                          <div key={`mobile-${color}`} className="flex items-center">
                            <Checkbox 
                              id={`mobile-color-${color}`}
                              checked={selectedColors.includes(color)}
                              onCheckedChange={() => handleColorToggle(color)}
                              className="text-starfit-wine border-starfit-wine/30"
                            />
                            <label 
                              htmlFor={`mobile-color-${color}`}
                              className="ml-2 text-sm cursor-pointer"
                            >
                              {color}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-starfit-wine">Faixa de Preço</h3>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <div key={`mobile-${range.id}`} className="flex items-center">
                            <Checkbox 
                              id={`mobile-price-${range.id}`}
                              checked={priceRange === range.id}
                              onCheckedChange={() => handlePriceRangeChange(range.id)}
                              className="text-starfit-wine border-starfit-wine/30"
                            />
                            <label 
                              htmlFor={`mobile-price-${range.id}`}
                              className="ml-2 text-sm cursor-pointer"
                            >
                              {range.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-starfit-wine">Ordenar por</h3>
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
                  
                  <div className="mt-8 space-y-3">
                    <Button 
                      onClick={() => {
                        setShowMobileFilters(false);
                      }}
                      className="w-full bg-starfit-wine hover:bg-starfit-wine/90 text-white"
                    >
                      Aplicar Filtros ({activeFiltersCount})
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        handleClearFilters();
                        setShowMobileFilters(false);
                      }}
                      className="w-full text-starfit-wine border-starfit-wine hover:bg-starfit-lightPink"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-starfit-gray">
                  Exibindo {sortedProducts.length > 0 ? startIndex + 1 : 0}-
                  {Math.min(endIndex, sortedProducts.length)} de {sortedProducts.length} produtos
                </p>
                
                <div className="hidden md:block">
                  <Select value={priceSort} onValueChange={handlePriceSortChange}>
                    <SelectTrigger className="w-[180px]">
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
        </div>
      </div>
    </Layout>
  );
};

export default Produtos;

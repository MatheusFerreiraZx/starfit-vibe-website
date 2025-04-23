import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { products } from '@/data/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const { favorites } = useFavorites();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (productId: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/produtos/${productId}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-starfit-wine text-white py-2 text-center text-sm">
        <p>Frete grátis para compras acima de R$299 | Pague em até 6x sem juros</p>
      </div>
      <div className="starfit-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-starfit-wine mr-1 fill-starfit-wine" />
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold">
                  <span className="text-starfit-wine">Star</span>
                  <span className="font-light">Fit</span>
                </h1>
                <span className="text-xs text-starfit-gray -mt-1">Moda Fitness</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Início
            </Link>
            <Link to="/produtos" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Coleções
            </Link>
            <Link to="/#about" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-starfit-gray hover:text-starfit-wine"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <User size={20} />
            </Button>
            <Link to="/favoritos">
              <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine relative">
                <Heart size={20} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-starfit-wine text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine relative">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-starfit-wine text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <div className={cn(
        "md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out", 
        isMenuOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
      )}>
        <div className="starfit-container py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Início
            </Link>
            <Link to="/produtos" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Coleções
            </Link>
            <Link to="/#about" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Sobre
            </Link>
            <Link to="/contato" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Contato
            </Link>
          </nav>
          <div className="flex items-center space-x-4 py-2">
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <Heart size={20} />
            </Button>
            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-starfit-wine text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Buscar produtos</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Digite para buscar..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />
            {searchResults.length > 0 ? (
              <div className="max-h-[300px] overflow-y-auto space-y-2">
                {searchResults.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-md flex items-center space-x-3"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        {product.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : searchQuery && (
              <p className="text-center text-gray-500 py-4">
                Nenhum produto encontrado
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;

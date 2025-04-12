
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-starfit-wine text-white py-2 text-center text-sm">
        <p>Frete grátis para compras acima de R$299 | Pague em até 6x sem juros</p>
      </div>
      <div className="starfit-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-starfit-wine mr-1 fill-starfit-wine" />
              <h1 className="text-3xl font-bold">
                <span className="text-starfit-wine">Star</span>
                <span className="font-light">Fit</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
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
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="starfit-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-starfit-wine mr-1 fill-starfit-wine" />
              <h1 className="text-2xl font-bold">
                <span className="text-starfit-wine">Star</span>
                <span className="font-light">Fit</span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Início
            </a>
            <a href="#categories" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Coleções
            </a>
            <a href="#categories" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Novidades
            </a>
            <a href="#about" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Sobre
            </a>
            <a href="#" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-starfit-wine text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
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
            <a href="/" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Início
            </a>
            <a href="#categories" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Coleções
            </a>
            <a href="#categories" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Novidades
            </a>
            <a href="#about" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Sobre
            </a>
            <a href="#" className="text-starfit-gray hover:text-starfit-wine font-medium transition-colors py-2">
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4 py-2">
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-starfit-gray hover:text-starfit-wine relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-starfit-wine text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

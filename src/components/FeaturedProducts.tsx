
import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Get only featured products
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="starfit-container">
        <h2 className="section-title text-center">Catálogo</h2>
        <p className="section-subtitle text-center mb-8">
          Confira nossos produtos mais populares
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;


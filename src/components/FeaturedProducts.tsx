
import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;


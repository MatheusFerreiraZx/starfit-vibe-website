
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import About from '@/components/About';
import FeaturedProducts from '@/components/FeaturedProducts';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
    </Layout>
  );
};

export default Index;

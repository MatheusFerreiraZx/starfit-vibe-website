
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Legging Essential",
    description: "Legging de alta compressão com tecido que se adapta ao seu corpo.",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1663589215886-81127d153c2f?q=80&w=1974&auto=format&fit=crop",
    category: "leggings",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Vinho", "Azul"],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Top Basic",
    description: "Top com suporte moderado ideal para todos os tipos de treino.",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1620405116969-742bd238f27c?q=80&w=1974&auto=format&fit=crop",
    category: "tops",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco", "Vinho"],
    inStock: true
  },
  {
    id: "3",
    name: "Shorts Running",
    description: "Shorts leve e respirável para corridas e cardio intenso.",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1571732154690-f6d1e1af2b0f?q=80&w=1974&auto=format&fit=crop",
    category: "shorts",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Cinza", "Rosa"],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Camiseta Dryfit",
    description: "Camiseta com tecido que absorve o suor mantendo você seca durante o treino.",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    category: "camisetas",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Branco", "Preto", "Vinho"],
    inStock: true
  },
  {
    id: "5",
    name: "Conjunto Fitness Premium",
    description: "Conjunto completo de top e legging com estampa exclusiva.",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1920&auto=format&fit=crop",
    category: "conjuntos",
    sizes: ["P", "M", "G"],
    colors: ["Estampa Floral", "Estampa Geométrica"],
    inStock: true,
    featured: true
  },
  {
    id: "6",
    name: "Jaqueta Corta-Vento",
    description: "Jaqueta leve para proteger durante atividades ao ar livre.",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1548883542-80fa5836d202?q=80&w=1920&auto=format&fit=crop",
    category: "casacos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Rosa"],
    inStock: true
  },
  {
    id: "7",
    name: "Meia Esportiva Pack com 3",
    description: "Kit com 3 pares de meias esportivas acolchoadas.",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1586350977771-b3d0a0fcf239?q=80&w=1920&auto=format&fit=crop",
    category: "acessorios",
    sizes: ["34-38", "39-42"],
    colors: ["Mix"],
    inStock: true
  },
  {
    id: "8",
    name: "Bolsa Fitness",
    description: "Bolsa espaçosa com compartimentos organizadores para academia.",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1920&auto=format&fit=crop",
    category: "acessorios",
    sizes: ["Único"],
    colors: ["Preto", "Rosa"],
    inStock: true
  }
];

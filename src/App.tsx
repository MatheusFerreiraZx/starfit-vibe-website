
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Produtos from "./pages/Produtos";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderCompleted from "./pages/OrderCompleted";
import Contato from "./pages/Contato";
import Favoritos from "./pages/Favoritos";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/produtos/:id" element={<ProductDetail />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/compra-finalizada" element={<OrderCompleted />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

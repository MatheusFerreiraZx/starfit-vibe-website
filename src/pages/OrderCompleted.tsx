
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const OrderCompleted = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = React.useMemo(() => {
    return Math.floor(100000 + Math.random() * 900000);
  }, []);
  
  return (
    <div className="py-16 px-4 md:px-0">
      <div className="starfit-container max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-starfit-wine mb-2">Pedido Realizado com Sucesso!</h1>
            <p className="text-starfit-gray mb-6 max-w-lg">
              Agradecemos por sua compra! Seu pedido foi recebido e está sendo processado.
              Você receberá um e-mail de confirmação em breve.
            </p>
            
            <div className="border-2 border-dashed border-starfit-wine/30 rounded-lg p-6 mb-8 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Detalhes do Pedido</h2>
              <p className="text-starfit-gray mb-2">Número do Pedido: <span className="font-semibold">#{orderNumber}</span></p>
              <p className="text-starfit-gray mb-2">Data: <span className="font-semibold">{new Date().toLocaleDateString('pt-BR')}</span></p>
              <p className="text-starfit-gray">Status: <span className="font-semibold text-green-600">Confirmado</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/produtos')} 
                className="bg-starfit-wine hover:bg-starfit-wine/90 text-white"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continuar Comprando
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  // This would normally link to an order tracking page
                  // For now, we'll just stay on this page
                }}
              >
                Acompanhar Pedido
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-starfit-wine mb-4">O que acontece agora?</h2>
          <ol className="space-y-4 text-left">
            <li className="flex gap-3">
              <div className="bg-starfit-lightPink rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="font-medium">Confirmação do Pedido</h3>
                <p className="text-sm text-starfit-gray">Você receberá um email de confirmação com todos os detalhes.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-starfit-lightPink rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="font-medium">Processamento do Pedido</h3>
                <p className="text-sm text-starfit-gray">Vamos preparar seus itens para envio em até 1-2 dias úteis.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-starfit-lightPink rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="font-medium">Envio</h3>
                <p className="text-sm text-starfit-gray">Você receberá outro email quando seu pedido for enviado, com informações de rastreamento.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-starfit-lightPink rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="font-medium">Entrega</h3>
                <p className="text-sm text-starfit-gray">Seu pedido será entregue no endereço fornecido. Prazo estimado: 3-7 dias úteis.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;

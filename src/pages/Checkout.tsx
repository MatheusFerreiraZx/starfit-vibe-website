
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  CreditCard,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome completo é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  cpf: z.string().min(11, { message: 'CPF inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  address: z.object({
    street: z.string().min(3, { message: 'Rua é obrigatória' }),
    number: z.string().min(1, { message: 'Número é obrigatório' }),
    complement: z.string().optional(),
    neighborhood: z.string().min(2, { message: 'Bairro é obrigatório' }),
    city: z.string().min(2, { message: 'Cidade é obrigatória' }),
    state: z.string().min(2, { message: 'Estado é obrigatório' }),
    zipcode: z.string().min(8, { message: 'CEP inválido' }),
  }),
  payment: z.object({
    method: z.enum(['credit', 'boleto', 'pix']),
    creditCard: z.object({
      number: z.string().min(16, { message: 'Número do cartão inválido' }).optional(),
      name: z.string().min(3, { message: 'Nome no cartão é obrigatório' }).optional(),
      expiry: z.string().min(4, { message: 'Data de validade inválida' }).optional(),
      cvv: z.string().min(3, { message: 'CVV inválido' }).optional(),
      installments: z.string().optional(),
    }).optional(),
  }),
  terms: z.boolean().refine(val => val === true, {
    message: 'Você precisa aceitar os termos e condições',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      address: {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipcode: '',
      },
      payment: {
        method: 'credit',
        creditCard: {
          number: '',
          name: '',
          expiry: '',
          cvv: '',
          installments: '1',
        },
      },
      terms: false,
    },
  });
  
  const paymentMethod = form.watch('payment.method');
  
  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    
    // Simulate processing
    toast({
      title: "Processando seu pedido",
      description: "Aguarde enquanto processamos seu pagamento...",
    });
    
    // Simulate successful payment after 2 seconds
    setTimeout(() => {
      clearCart();
      navigate('/compra-finalizada');
    }, 2000);
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="py-16 px-4 md:px-0">
        <div className="starfit-container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-starfit-wine mb-4">Seu carrinho está vazio</h2>
          <p className="text-starfit-gray mb-6">Você precisa adicionar produtos ao carrinho antes de prosseguir com o checkout</p>
          <Button 
            onClick={() => navigate('/produtos')} 
            className="bg-starfit-wine hover:bg-starfit-wine/90 text-white"
          >
            Ver Produtos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-0">
      <div className="starfit-container max-w-6xl mx-auto">
        <Button 
          onClick={() => navigate('/carrinho')} 
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o carrinho
        </Button>
        
        <h1 className="text-3xl font-bold text-starfit-wine mb-8 font-display">Checkout</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CPF</FormLabel>
                            <FormControl>
                              <Input placeholder="000.000.000-00" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Endereço de Entrega</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <FormField
                          control={form.control}
                          name="address.street"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rua</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome da rua" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="address.number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address.complement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Complemento</FormLabel>
                          <FormControl>
                            <Input placeholder="Apt, Bloco, etc (opcional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="address.neighborhood"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bairro</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu bairro" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address.zipcode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CEP</FormLabel>
                            <FormControl>
                              <Input placeholder="00000-000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="address.city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cidade</FormLabel>
                            <FormControl>
                              <Input placeholder="Recife" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address.state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estado</FormLabel>
                            <FormControl>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="AC">Acre</SelectItem>
                                  <SelectItem value="AL">Alagoas</SelectItem>
                                  <SelectItem value="AP">Amapá</SelectItem>
                                  <SelectItem value="AM">Amazonas</SelectItem>
                                  <SelectItem value="BA">Bahia</SelectItem>
                                  <SelectItem value="CE">Ceará</SelectItem>
                                  <SelectItem value="DF">Distrito Federal</SelectItem>
                                  <SelectItem value="ES">Espírito Santo</SelectItem>
                                  <SelectItem value="GO">Goiás</SelectItem>
                                  <SelectItem value="MA">Maranhão</SelectItem>
                                  <SelectItem value="MT">Mato Grosso</SelectItem>
                                  <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                                  <SelectItem value="MG">Minas Gerais</SelectItem>
                                  <SelectItem value="PA">Pará</SelectItem>
                                  <SelectItem value="PB">Paraíba</SelectItem>
                                  <SelectItem value="PR">Paraná</SelectItem>
                                  <SelectItem value="PE">Pernambuco</SelectItem>
                                  <SelectItem value="PI">Piauí</SelectItem>
                                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                                  <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                                  <SelectItem value="RO">Rondônia</SelectItem>
                                  <SelectItem value="RR">Roraima</SelectItem>
                                  <SelectItem value="SC">Santa Catarina</SelectItem>
                                  <SelectItem value="SP">São Paulo</SelectItem>
                                  <SelectItem value="SE">Sergipe</SelectItem>
                                  <SelectItem value="TO">Tocantins</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Payment */}
                <Card>
                  <CardHeader>
                    <CardTitle>Forma de Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="payment.method"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Método de Pagamento</FormLabel>
                          <FormControl>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o método de pagamento" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="credit">Cartão de Crédito</SelectItem>
                                <SelectItem value="boleto">Boleto Bancário</SelectItem>
                                <SelectItem value="pix">PIX</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {paymentMethod === 'credit' && (
                      <div className="space-y-4 mt-4 p-4 border rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="payment.creditCard.number"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Número do Cartão</FormLabel>
                                <FormControl>
                                  <Input placeholder="0000 0000 0000 0000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="payment.creditCard.name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome no Cartão</FormLabel>
                                <FormControl>
                                  <Input placeholder="NOME IMPRESSO NO CARTÃO" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="payment.creditCard.expiry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Validade</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM/AA" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="payment.creditCard.cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input placeholder="123" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="payment.creditCard.installments"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Parcelas</FormLabel>
                                <FormControl>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">1x de {formatPrice(subtotal)}</SelectItem>
                                      <SelectItem value="2">2x de {formatPrice(subtotal / 2)}</SelectItem>
                                      <SelectItem value="3">3x de {formatPrice(subtotal / 3)}</SelectItem>
                                      <SelectItem value="4">4x de {formatPrice(subtotal / 4)}</SelectItem>
                                      <SelectItem value="5">5x de {formatPrice(subtotal / 5)}</SelectItem>
                                      <SelectItem value="6">6x de {formatPrice(subtotal / 6)}</SelectItem>
                                      <SelectItem value="10">10x de {formatPrice(subtotal / 10)}</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'boleto' && (
                      <div className="bg-gray-50 p-4 rounded-md mt-4">
                        <p className="text-starfit-gray">
                          O boleto será gerado após a finalização do pedido e pode ser pago em qualquer agência bancária ou internet banking.
                        </p>
                      </div>
                    )}
                    
                    {paymentMethod === 'pix' && (
                      <div className="bg-gray-50 p-4 rounded-md mt-4">
                        <p className="text-starfit-gray">
                          Após finalizar o pedido, você receberá o QR Code PIX para pagamento imediato.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Concordo com os termos de uso, políticas de privacidade e condições de compra
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="sticky top-8 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Resumo do Pedido</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        {items.map((item) => (
                          <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between text-sm py-1">
                            <span>
                              {item.name} x{item.quantity} <span className="text-xs">({item.selectedSize})</span>
                            </span>
                            <span>{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-2">
                        <div className="flex justify-between py-1">
                          <span>Subtotal</span>
                          <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Frete</span>
                          <span>Grátis</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>{formatPrice(subtotal)}</span>
                        </div>
                        {paymentMethod === 'credit' && (
                          <div className="text-xs text-starfit-gray text-right">
                            em até 10x de {formatPrice(subtotal / 10)} sem juros
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full py-6 bg-starfit-wine hover:bg-starfit-wine/90 text-white"
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Finalizar Compra
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;

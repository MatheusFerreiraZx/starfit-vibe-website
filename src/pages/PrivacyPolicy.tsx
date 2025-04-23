
import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="starfit-container py-12">
        <h1 className="text-3xl font-bold text-starfit-wine mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-stone max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-starfit-gray mb-4">1. Informações que coletamos</h2>
            <p className="text-starfit-gray">
              Coletamos informações quando você se registra em nosso site, faz uma compra ou se inscreve em nossa newsletter. 
              As informações coletadas incluem seu nome, endereço de e-mail, número de telefone e endereço de entrega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-starfit-gray mb-4">2. Como usamos suas informações</h2>
            <p className="text-starfit-gray">
              Utilizamos as informações que coletamos para:
            </p>
            <ul className="list-disc pl-6 text-starfit-gray">
              <li>Processar seus pedidos e enviar atualizações sobre o status</li>
              <li>Enviar e-mails sobre nossos produtos, promoções e novidades (quando autorizado)</li>
              <li>Melhorar nosso site e serviço ao cliente</li>
              <li>Personalizar sua experiência de compra</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-starfit-gray mb-4">3. Proteção de informações</h2>
            <p className="text-starfit-gray">
              Implementamos medidas de segurança para manter a segurança de suas informações pessoais. 
              Suas informações pessoais são mantidas em redes seguras e são acessíveis apenas por um número limitado 
              de pessoas que têm direitos especiais de acesso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-starfit-gray mb-4">4. Cookies</h2>
            <p className="text-starfit-gray">
              Utilizamos cookies para melhorar sua experiência em nosso site. Cookies são pequenos arquivos que um site 
              ou provedor de serviços transfere para o disco rígido do seu computador através do navegador da Web 
              (se você permitir).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-starfit-gray mb-4">5. Contato</h2>
            <p className="text-starfit-gray">
              Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco através do 
              e-mail: contato@starfit.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

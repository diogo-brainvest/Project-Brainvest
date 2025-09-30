import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import './NoticiaPix.css';

const NoticiaPix: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="noticia-page-container">
      {/* Header Componente */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="noticia-main">
        <div className="container">
          <article className="noticia-article">
            {/* Header da Notícia */}
            <header className="noticia-header">
              <div className="noticia-category">🚨 ALERTA FINANCEIRO</div>
              <h1 className="noticia-title">
                BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025
              </h1>
              <p className="noticia-lead">
                Com crescimento explosivo de 187%, Banco Central acelera estudos para regulamentar modalidade. 
                Especialistas alertam para riscos sistêmicos e necessidade de proteção ao consumidor.
              </p>
              <div className="noticia-meta">
                <span className="noticia-date">28 de Setembro, 2025</span>
                <span className="noticia-author">Por Finance Helper</span>
              </div>
            </header>

            {/* Corpo da Notícia */}
            <div className="noticia-body">
              <p>
                O Banco Central do Brasil (BC) confirmou que a regulamentação do "PIX Parcelado", modalidade que permite 
                dividir compras via PIX, está na pauta prioritária e pode ser implementada ainda em 2025. A medida surge 
                após um crescimento explosivo de 187% na utilização da ferramenta nos últimos 12 meses.
              </p>

              <p>
                A modalidade, oferecida de forma independente por diversas instituições financeiras, tem ganhado 
                popularidade entre consumidores que buscam alternativas ao cartão de crédito tradicional. No entanto, 
                a ausência de regras unificadas gera preocupação tanto no BC quanto entre especialistas do setor.
              </p>

              <blockquote className="noticia-quote">
                "O crescimento desordenado cria um ambiente de risco tanto para o consumidor, que pode se endividar 
                sem clareza das taxas aplicadas, quanto para o sistema financeiro como um todo"
                <cite>— Analista sênior do Banco Central</cite>
              </blockquote>

              <h2>Riscos e Oportunidades do PIX Parcelado</h2>
              
              <p>
                Especialistas alertam que, sem controle adequado, o PIX Parcelado pode se tornar uma nova fonte de 
                superendividamento. Em alguns casos, as taxas de juros aplicadas chegam a superar as do cartão de 
                crédito, atingindo patamares de 15% a 20% ao mês em modalidades específicas.
              </p>

              <p>
                Por outro lado, a formalização da modalidade pode democratizar o acesso ao crédito e aumentar a 
                competição no setor, potencialmente reduzindo custos para o consumidor final.
              </p>

              <h2>O Que a Regulamentação Deve Incluir</h2>

              <p>A regulamentação em estudo pelo BC deve abordar pontos cruciais como:</p>

              <ul>
                <li><strong>Padronização de taxas:</strong> Definição de limites máximos para juros e tarifas</li>
                <li><strong>Transparência:</strong> Obrigatoriedade de informar custos de forma clara</li>
                <li><strong>Proteção ao consumidor:</strong> Mecanismos de defesa contra práticas abusivas</li>
                <li><strong>Responsabilidades:</strong> Definição clara entre bancos, fintechs e intermediários</li>
              </ul>

              <p>
                A expectativa é que o BC apresente uma consulta pública sobre o tema no primeiro semestre de 2025, 
                definindo as diretrizes para que a modalidade opere de forma segura e sustentável.
              </p>
            </div>

            {/* CTA */}
            <section className="noticia-cta">
              <h3>Gostou do conteúdo?</h3>
              <p>Volte para a home e explore mais dados sobre endividamento e educação financeira no Brasil.</p>
              <Link to="/" className="btn btn-primary btn-large">
                Voltar para Home
              </Link>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NoticiaPix;
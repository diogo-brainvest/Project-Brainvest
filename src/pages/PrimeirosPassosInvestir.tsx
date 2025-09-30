import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import './NoticiaPix.css';

const PrimeirosPassosInvestir: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="noticia-page-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">Finance Helper</Link>
          <nav className="nav">
            <Link to="/#dados" className="nav-link">Dados</Link>
            <Link to="/#dicas" className="nav-link">Dicas</Link>
            <Link to="/#blog" className="nav-link">Blog</Link>
            <Link to="/#sobre" className="nav-link">Sobre</Link>
          </nav>
        </div>
      </header>

      <main className="noticia-content">
        <article>
          <header className="noticia-header">
            <span className="noticia-categoria iniciante">Iniciante</span>
            <h1>5 Passos para Começar a Investir do Zero 🚀</h1>
            <p className="noticia-subtitulo">
              Organize suas finanças, defina objetivos claros e dê o primeiro passo rumo à independência financeira. 
              Guia completo para quem quer sair da poupança e começar a investir de verdade.
            </p>
          </header>

          <div className="noticia-body">
            <div className="step-card">
              <h2>1. Organize suas finanças</h2>
              <p>Primeiro de tudo: sabe para onde seu dinheiro tá indo? Dá uma olhada nos gastos, corta o que é supérfluo e, se tiver dívidas com juros altos, resolve isso antes. Depois, monta uma reserva de emergência em algo seguro e com saque fácil.</p>
            </div>

            <div className="step-card">
              <h2>2. Tenha objetivos claros</h2>
              <p>Investir sem objetivo é tipo andar sem mapa. Quer viajar? Comprar um carro? Garantir a aposentadoria? Decide o "para quê" e o "quando". E já aproveita para descobrir seu perfil de investidor (conservador, moderado ou arrojado).</p>
            </div>

            <div className="step-card">
              <h2>3. Escolha uma corretora</h2>
              <p>Hoje é simples: baixe o app, abre a conta e pronto. Mas não vai no impulso! Pesquisa, compara algumas opções e vê qual te passa mais confiança.</p>
            </div>

            <div className="step-card">
              <h2>4. Hora da primeira aplicação</h2>
              <p>Não espera ter muito dinheiro, começa pequeno. O importante é dar o primeiro passo. Renda fixa é ótima para começar e criar o hábito de investir todo mês.</p>
            </div>

            <div className="step-card">
              <h2>5. Acompanhe e ajuste</h2>
              <p>Investir é um processo, não corrida de 100 metros. Vai acompanhando sem ansiedade, tenha paciência e, com o tempo, diversifica para reduzir riscos e aumentar as chances de ganho.</p>
            </div>

            <div className="cta-box">
              <h3>Próximo passo: Aprenda sobre CDB</h3>
              <p>Agora que você sabe os fundamentos, que tal conhecer seu primeiro investimento?</p>
              <Link to="/blog/primeiro-investimento-cdb" className="btn-cta">
                Ver guia de CDB →
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrimeirosPassosInvestir;
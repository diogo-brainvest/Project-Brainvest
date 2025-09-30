import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import './NoticiaPix.css';

const PrimeiroInvestimentoCDB: React.FC = () => {
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
            <span className="noticia-categoria cdb">CDB</span>
            <h1>Seu Primeiro Investimento em CDB: Passo a Passo Completo 💰</h1>
            <p className="noticia-subtitulo">
              Entenda como funciona o CDB, escolha a melhor opção e faça sua primeira aplicação. 
              Rendimento garantido pelo FGC e mais segurança que a poupança.
            </p>
          </header>

          <div className="noticia-body">
            <div className="step-card">
              <h2>1. Entenda o que é um CDB</h2>
              <p>O CDB é um jeito de você emprestar dinheiro ao banco e receber juros em troca. É simples: você aplica hoje e o banco devolve o valor aplicado com rendimento.</p>
            </div>

            <div className="step-card">
              <h2>2. Defina seu objetivo</h2>
              <p>Quer montar uma reserva de emergência? Guardar para um plano de médio prazo? O prazo do seu objetivo ajuda a escolher o tipo de CDB mais adequado.</p>
            </div>

            <div className="step-card">
              <h2>3. Abra uma conta</h2>
              <p>Escolha uma corretora ou banco digital confiável. Hoje dá para abrir conta pelo celular em poucos minutos, sem complicação.</p>
            </div>

            <div className="step-card">
              <h2>4. Transfira o valor que deseja investir</h2>
              <p>Faça uma transferência para a conta da corretora/banco. Assim, seu dinheiro estará disponível para aplicar.</p>
            </div>

            <div className="step-card">
              <h2>5. Escolha o CDB adequado para você</h2>
              <p>Na área de investimentos, procure por CDBs. Observe:</p>
              <ul>
                <li><strong>Rentabilidade</strong> (ex.: 100% do CDI)</li>
                <li><strong>Liquidez</strong> (se pode resgatar a qualquer momento ou só no vencimento)</li>
                <li><strong>Garantia do FGC</strong> (protege até R$ 250 mil por CPF em cada instituição)</li>
              </ul>
            </div>

            <div className="step-card">
              <h2>6. Faça sua primeira aplicação</h2>
              <p>Selecione o valor, confirme e pronto: você já é investidor(a)! 🎉</p>
            </div>

            <div className="step-card">
              <h2>7. Acompanhe seu investimento</h2>
              <p>Pelo aplicativo, você consegue ver o rendimento crescer dia a dia. Se for um CDB de liquidez diária, pode resgatar quando precisar. Se for de prazo fixo, deixe o dinheiro rendendo até a data final.</p>
            </div>

            <div className="tip-box">
              <h3>💡 Dica rápida</h3>
              <p>Para quem está começando, o CDB com liquidez diária é uma ótima escolha. Ele rende mais que a poupança e você pode sacar a qualquer momento, sem dor de cabeça.</p>
            </div>

            <div className="cta-box">
              <h3>Ainda não começou a investir?</h3>
              <p>Volte ao básico e organize suas finanças primeiro.</p>
              <Link to="/blog/primeiros-passos-investir" className="btn-cta">
                Ver passos iniciais →
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

export default PrimeiroInvestimentoCDB;
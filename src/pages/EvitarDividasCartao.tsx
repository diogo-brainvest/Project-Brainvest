import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { Link } from 'react-router-dom';
import './NoticiaPix.css';

const EvitarDividasCartao: React.FC = () => {
  return (
    <div className="noticia-page-container">
      <Header onNavigate={() => {}} />
      <main className="noticia-content">
        <article>
          <header className="noticia-header">
            <span className="noticia-categoria cartao">Cartão</span>
            <h1>Como Evitar Dívidas no Cartão de Crédito? 💳</h1>
            <p className="noticia-subtitulo">
              Uma fatura "pequena" pode crescer feito bola de neve. Juros altíssimos, pagamento mínimo, dívidas antigas... 
              tudo isso vira um problema sério se não tiver controle.
            </p>
          </header>

          <div className="noticia-body">
            <div className="alert-box">
              <h3>⚠️ Alerta: Juros do Rotativo chegaram a 445% ao ano em 2025!</h3>
              <p>Em janeiro de 2025, o Banco Central registrou juros rotativos médios de 445,6% ao ano. 
              Desde janeiro de 2024, existe uma lei que limita os juros a 100% do valor original da dívida.</p>
            </div>

            <h2>Por que as dívidas do cartão sobem tão rápido?</h2>
            
            <div className="step-card">
              <h3>🔄 Rotativo com taxas absurdas</h3>
              <p>Se você não pagar a fatura inteira, o saldo devedor entra no rotativo — modalidade com taxas absurdas.</p>
            </div>

            <div className="step-card">
              <h3>📉 Pagamento mínimo é uma armadilha</h3>
              <p>Pagar só o mínimo empurra o resto da conta e mantém os juros ativos.</p>
            </div>

            <div className="step-card">
              <h3>📊 Parcelamentos com juros ocultos</h3>
              <p>Parcelamentos com juros ocultos ou pouco transparentes também pesam muito no fim.</p>
            </div>

            <div className="step-card">
              <h3>🛒 Compras sem planejamento</h3>
              <p>Compras sem planejamento, para itens não essenciais, acabam acumulando.</p>
            </div>

            <div className="highlight-box">
              <h3>📈 Exemplos reais do problema:</h3>
              <ul>
                <li>Juros médios do rotativo chegaram a <strong>~445% ao ano</strong> nos últimos meses</li>
                <li>Em janeiro de 2025, o BC registrou juros rotativos médios de <strong>445,6% ao ano</strong></li>
                <li>Lei estabelece que juros não podem ultrapassar <strong>100% do valor original</strong> desde janeiro de 2024</li>
              </ul>
            </div>

            <h2>Estratégias práticas para evitar entrar em dívida</h2>

            <div className="step-card">
              <h3>1. 📋 Controle sua renda e despesas fixas</h3>
              <p>Anote tudo que você ganha, tudo que gasta: aluguel, contas, alimentação, transporte, lazer. 
              Saber o cenário completo ajuda a traçar limites realistas.</p>
            </div>

            <div className="step-card">
              <h3>2. 🎯 Defina um limite pessoal para o uso do cartão</h3>
              <p>Use-o só para aquilo que você tem certeza de que vai conseguir pagar integralmente até o vencimento da fatura.</p>
            </div>

            <div className="step-card">
              <h3>3. 💯 Pague a fatura cheia sempre que possível</h3>
              <p>Evita que acabe no rotativo, onde os juros são os mais altos do mercado.</p>
            </div>

            <div className="step-card">
              <h3>4. ⚠️ Cuidado ao parcelar</h3>
              <p>Se for parcelar, prefira parcelamentos sem juros. Verifique o Custo Efetivo Total (CET) — 
              às vezes, parece barato, mas com juros embutidos o valor final fica muito maior.</p>
            </div>

            <div className="step-card">
              <h3>5. 🏦 Tenha uma reserva de emergência</h3>
              <p>Um imprevisto pode bater: se você tiver algo guardado, não vai precisar recorrer ao cartão rotativo.</p>
            </div>

            <div className="step-card">
              <h3>6. 🤝 Negocie logo</h3>
              <p>Se perceber que vai atrasar ou que não vai conseguir pagar tudo, fale com o banco. 
              Muitas vezes aceitam parcelar, reduzir juros ou oferecer condições melhores.</p>
            </div>

            <div className="step-card">
              <h3>7. 📚 Educação financeira constante</h3>
              <p>Ler, assistir vídeos, participar de conteúdos sobre finanças pessoais ajuda MUITO. 
              Saber como juros, contratos, taxas funcionam é meio caminho andado para tomar decisões melhores.</p>
            </div>

            <div className="emergency-box">
              <h2>🚨 O que fazer se você já está com dívidas</h2>
              
              <div className="emergency-steps">
                <div className="emergency-step">
                  <h4>📝 Liste todas as dívidas</h4>
                  <p>Valor total, quanto de juros está sendo cobrado, taxas, mínimo da fatura.</p>
                </div>
                
                <div className="emergency-step">
                  <h4>🎯 Priorize juros mais altos</h4>
                  <p>Pague aquelas com juros mais altos primeiro (rotativo, por exemplo).</p>
                </div>
                
                <div className="emergency-step">
                  <h4>🤝 Negocie com o banco</h4>
                  <p>Peça prazo, redução de juros, talvez alguma renegociação.</p>
                </div>
                
                <div className="emergency-step">
                  <h4>✂️ Corte gastos supérfluos</h4>
                  <p>Temporariamente para liberar dinheiro para pagar dívidas.</p>
                </div>
                
                <div className="emergency-step">
                  <h4>📊 Inclua no orçamento</h4>
                  <p>Os pagamentos dessas dívidas como despesa fixa até que sejam quitadas.</p>
                </div>
                
                <div className="emergency-step">
                  <h4>📈 Acompanhe mensalmente</h4>
                  <p>Veja quanto você está reduzindo — isso ajuda a manter o foco.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h3>Quer aprender mais sobre controle financeiro?</h3>
              <p>Comece pelos primeiros passos para organizar suas finanças.</p>
              <Link to="/blog/primeiros-passos-investir" className="btn-cta">
                Ver guia completo →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EvitarDividasCartao;
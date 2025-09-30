import React from 'react';
import { Link } from 'react-router-dom';

interface BlogSectionProps {
  onCTAClick: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">Últimas Atualizações</h2>
          <p className="section-subtitle">
            Fique por dentro das principais notícias e dicas financeiras
          </p>
        </div>

        <div className="blog-grid">
          {/* Card BC Alerta - PIX */}
          <article className="blog-card urgent">
            <div className="urgent-badge">
              <div className="pulse-dot"></div>
              <span>URGENTE</span>
            </div>
            
            <div className="card-category urgent">ALERTA BC</div>
            
            <h3 className="card-title">
              BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025
            </h3>
            
            <p className="card-description">
              Banco Central estuda regulamentação após explosão de 187% no uso da modalidade. 
              Especialistas alertam para riscos sistêmicos no sistema financeiro.
            </p>
            
            <div className="card-meta">
              <span className="read-time">3 min de leitura</span>
              <span className="publish-date">15 Jan 2025</span>
            </div>
            
            <Link to="/noticia/pix-parcelado-2025" className="card-link">
              <span>Ler Agora</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </Link>
          </article>

          {/* Card Educacional - Primeiros Passos */}
          <article className="blog-card educational">
            <div className="card-category educational">EDUCAÇÃO</div>
            
            <h3 className="card-title">
              5 Passos para Começar a Investir do Zero
            </h3>
            
            <p className="card-description">
              Organize suas finanças, defina objetivos claros e dê o primeiro passo 
              rumo à independência financeira com segurança.
            </p>
            
            <div className="card-meta">
              <span className="read-time">5 min de leitura</span>
              <span className="publish-date">14 Jan 2025</span>
            </div>
            
            <Link to="/blog/primeiros-passos-investir" className="card-link">
              <span>Ler Guia</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Link>
          </article>

          {/* Card Dicas - Cartão de Crédito */}
          <article className="blog-card tips">
            <div className="card-category tips">DICAS</div>
            
            <h3 className="card-title">
              Como Evitar Dívidas no Cartão de Crédito?
            </h3>
            
            <p className="card-description">
              Estratégias práticas para não cair no rotativo e controlar os gastos. 
              Juros de 445% ao ano podem destruir seu orçamento.
            </p>
            
            <div className="card-meta">
              <span className="read-time">4 min de leitura</span>
              <span className="publish-date">13 Jan 2025</span>
            </div>
            
            <Link to="/blog/evitar-dividas-cartao-credito" className="card-link">
              <span>Ver Estratégias</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Link>
          </article>
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="view-all-btn">
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
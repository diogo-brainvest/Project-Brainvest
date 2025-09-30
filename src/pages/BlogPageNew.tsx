import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import './BlogPage.css';

/**
 * BlogPage Component - Página dedicada do blog seguindo o design da Home
 * 
 * Componente simplificado seguindo exatamente os padrões de design da Home:
 * - Mesmas cores e gradientes
 * - Mesma estrutura de seções
 * - Mesmos estilos de cards
 * - Mesma tipografia e espaçamentos
 */
const BlogPage: React.FC = () => {
  
  // Artigos principais (mesmos da home)
  const featuredArticles = [
    {
      id: 'pix-parcelado-2025',
      title: 'BC Alerta: PIX Parcelado Pode Ser Regulamentado em 2025',
      description: 'Após crescimento explosivo de 187%, Banco Central estuda regras para modalidade. Especialistas alertam para riscos de endividamento e necessidade de proteção ao consumidor.',
      publishDate: '15 Jan 2025',
      readTime: '8 min',
      category: 'urgent',
      link: '/noticia/pix-parcelado-2025'
    },
    {
      id: 'evitar-dividas-cartao',
      title: 'Como Evitar as Armadilhas do Cartão de Crédito',
      description: 'Dicas essenciais para não cair no rotativo e manter suas finanças sob controle. Estratégias práticas para uso consciente.',
      publishDate: '12 Jan 2025',
      readTime: '6 min',
      category: 'educational',
      link: '/dicas/evitar-dividas-cartao'
    },
    {
      id: 'primeiro-investimento-cdb',
      title: 'Seu Primeiro Investimento: Guia Completo CDB',
      description: 'Passo a passo completo para começar a investir com segurança. Tudo que você precisa saber sobre CDB.',
      publishDate: '10 Jan 2025',
      readTime: '12 min',
      category: 'tips',
      link: '/guias/primeiro-investimento-cdb'
    }
  ];

  // Mais artigos
  const additionalArticles = [
    {
      id: 'primeiros-passos-investir',
      title: 'Primeiros Passos para Investir seu Dinheiro',
      description: 'Guia básico para quem está começando no mundo dos investimentos. Conceitos fundamentais e primeiras decisões.',
      publishDate: '8 Jan 2025',
      readTime: '10 min',
      category: 'educational',
      link: '/guias/primeiros-passos-investir'
    },
    {
      id: 'organizacao-financeira',
      title: 'Como Organizar suas Finanças em 2025',
      description: 'Métodos práticos para controlar gastos e aumentar sua reserva de emergência.',
      publishDate: '5 Jan 2025',
      readTime: '7 min',
      category: 'tips',
      link: '/dicas/organizacao-financeira'
    },
    {
      id: 'investimentos-iniciantes',
      title: 'Melhores Investimentos para Iniciantes',
      description: 'Opções seguras e rentáveis para quem está dando os primeiros passos.',
      publishDate: '3 Jan 2025',
      readTime: '9 min',
      category: 'educational',
      link: '/guias/investimentos-iniciantes'
    }
  ];

  return (
    <div className="blog-page">
      <Header />
      
      {/* Hero Section - Seguindo padrão da Home */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Central de Conhecimento
              <span className="title-highlight">Financeiro</span>
            </h1>
            <p className="hero-description">
              Educação financeira, dicas práticas e análises do mercado para você tomar decisões mais inteligentes com seu dinheiro.
            </p>
          </div>
        </div>
      </section>

      {/* Alerta PIX - Mesma seção da Home */}
      <section className="alerta-pix-section">
        <div className="container">
          <div className="alerta-container">
            <div className="alerta-icon">🚨</div>
            <div className="alerta-content">
              <h3>BC Alerta: PIX Parcelado Pode Ser Regulamentado em 2025</h3>
              <p>
                Após crescimento explosivo de 187%, Banco Central estuda regras para modalidade. 
                Especialistas alertam para riscos de endividamento e necessidade de proteção ao consumidor.
              </p>
            </div>
            <div className="alerta-action">
              <Link to="/noticia/pix-parcelado-2025" className="btn-alerta">
                Ler Matéria Completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Artigos Principais */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h2 className="section-title">Artigos em Destaque</h2>
            <p className="section-subtitle">
              Conteúdo selecionado para impulsionar sua educação financeira
            </p>
          </div>

          <div className="blog-grid">
            {featuredArticles.map((article) => (
              <article key={article.id} className={`blog-card ${article.category}`}>
                {article.category === 'urgent' && (
                  <div className="urgent-badge">
                    <div className="pulse-dot"></div>
                    URGENTE
                  </div>
                )}
                
                <div className={`card-category ${article.category}`}>
                  {article.category === 'urgent' ? 'Urgente' : 
                   article.category === 'educational' ? 'Educativo' : 'Dicas'}
                </div>
                
                <h3 className="card-title">{article.title}</h3>
                <p className="card-description">{article.description}</p>
                
                <div className="card-meta">
                  <span className="read-time">{article.readTime}</span>
                  <span className="publish-date">{article.publishDate}</span>
                </div>
                
                <Link to={article.link} className="card-link">
                  Ler Artigo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mais Artigos */}
      <section className="more-articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mais Artigos</h2>
            <p className="section-subtitle">
              Continue sua jornada de aprendizado financeiro
            </p>
          </div>

          <div className="blog-grid">
            {additionalArticles.map((article) => (
              <article key={article.id} className={`blog-card ${article.category}`}>
                <div className={`card-category ${article.category}`}>
                  {article.category === 'educational' ? 'Educativo' : 'Dicas'}
                </div>
                
                <h3 className="card-title">{article.title}</h3>
                <p className="card-description">{article.description}</p>
                
                <div className="card-meta">
                  <span className="read-time">{article.readTime}</span>
                  <span className="publish-date">{article.publishDate}</span>
                </div>
                
                <Link to={article.link} className="card-link">
                  Ler Artigo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Seguindo padrão da Home */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Transforme sua Relação com o Dinheiro
            </h2>
            <p className="cta-description">
              Acesse nossa plataforma completa de educação financeira e tome o controle das suas finanças.
            </p>
            <Link to="/" className="cta-button">
              Voltar ao Dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
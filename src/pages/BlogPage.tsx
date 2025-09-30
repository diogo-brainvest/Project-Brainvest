import React, { useState } from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025',
      description: 'Banco Central estuda regulamentação após explosão de 187% no uso da modalidade. Especialistas alertam para riscos sistêmicos no sistema financeiro.',
      category: 'ALERTA BC',
      categoryClass: 'urgent',
      readTime: '3 min de leitura',
      publishDate: '15 Jan 2025',
      link: '/noticia/pix-parcelado-2025',
      urgent: true
    },
    {
      id: 2,
      title: '5 Passos para Começar a Investir do Zero',
      description: 'Organize suas finanças, defina objetivos claros e dê o primeiro passo rumo à independência financeira com segurança.',
      category: 'EDUCAÇÃO',
      categoryClass: 'educational',
      readTime: '5 min de leitura',
      publishDate: '14 Jan 2025',
      link: '/blog/primeiros-passos-investir',
      urgent: false
    },
    {
      id: 3,
      title: 'Como Evitar Dívidas no Cartão de Crédito?',
      description: 'Estratégias práticas para não cair no rotativo e controlar os gastos. Juros de 445% ao ano podem destruir seu orçamento.',
      category: 'DICAS',
      categoryClass: 'tips',
      readTime: '4 min de leitura',
      publishDate: '13 Jan 2025',
      link: '/blog/evitar-dividas-cartao-credito',
      urgent: false
    },
    {
      id: 4,
      title: 'Tesouro Direto: Guia Completo para Iniciantes 2025',
      description: 'Entenda como funciona o Tesouro Direto, os tipos de títulos disponíveis e como fazer seu primeiro investimento com apenas R$ 30.',
      category: 'INVESTIMENTOS',
      categoryClass: 'investment',
      readTime: '7 min de leitura',
      publishDate: '12 Jan 2025',
      link: '/blog/tesouro-direto-guia',
      urgent: false
    },
    {
      id: 5,
      title: 'Reserva de Emergência: Quanto Guardar em 2025',
      description: 'Descubra o valor ideal para sua reserva de emergência e os melhores investimentos para manter seu dinheiro seguro e rentável.',
      category: 'PLANEJAMENTO',
      categoryClass: 'planning',
      readTime: '6 min de leitura',
      publishDate: '11 Jan 2025',
      link: '/blog/reserva-emergencia',
      urgent: false
    },
    {
      id: 6,
      title: 'Fundos Imobiliários para Iniciantes: Guia FII 2025',
      description: 'Guia completo sobre fundos imobiliários: tipos, vantagens, riscos e como escolher os melhores FIIs para sua carteira.',
      category: 'INVESTIMENTOS',
      categoryClass: 'investment',
      readTime: '8 min de leitura',
      publishDate: '10 Jan 2025',
      link: '/blog/fundos-imobiliarios',
      urgent: false
    },
    {
      id: 7,
      title: 'Como Declarar Imposto de Renda sobre Investimentos',
      description: 'Passo a passo completo para declarar seus investimentos no IR 2025: ações, fundos, tesouro direto e muito mais.',
      category: 'IMPOSTOS',
      categoryClass: 'taxes',
      readTime: '10 min de leitura',
      publishDate: '09 Jan 2025',
      link: '/blog/imposto-renda-investimentos',
      urgent: false
    },
    {
      id: 8,
      title: 'Melhores Ações que Pagam Dividendos em 2025',
      description: 'Lista atualizada das ações com melhor histórico de dividendos e estratégias para construir uma carteira de renda passiva.',
      category: 'INVESTIMENTOS',
      categoryClass: 'investment',
      readTime: '9 min de leitura',
      publishDate: '08 Jan 2025',
      link: '/blog/acoes-dividendos-2025',
      urgent: false
    }
  ];

  const categories = ['Todos', 'ALERTA BC', 'EDUCAÇÃO', 'INVESTIMENTOS', 'DICAS', 'PLANEJAMENTO', 'IMPOSTOS'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const urgentArticles = articles.filter(article => article.urgent);

  return (
    <div className="blog-page">
      <Header onNavigate={() => {}} />
      
      <main className="blog-main">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1 className="blog-title">Central de Conhecimento Financeiro</h1>
              <p className="blog-subtitle">
                Notícias atualizadas, guias práticos e estratégias comprovadas para transformar sua vida financeira
              </p>
            </div>
          </div>
        </section>

        {urgentArticles.length > 0 && (
          <section className="urgent-news-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">🚨 Últimas do Mercado</h2>
                <p className="section-subtitle">Alertas importantes que podem impactar seus investimentos</p>
              </div>
              
              <div className="urgent-grid">
                {urgentArticles.map(article => (
                  <article key={article.id} className={`blog-card ${article.categoryClass}`}>
                    <div className="urgent-badge">
                      <div className="pulse-dot"></div>
                      <span>URGENTE</span>
                    </div>
                    
                    <div className={`card-category ${article.categoryClass}`}>{article.category}</div>
                    
                    <h3 className="card-title">{article.title}</h3>
                    
                    <p className="card-description">{article.description}</p>
                    
                    <div className="card-meta">
                      <span className="read-time">{article.readTime}</span>
                      <span className="publish-date">{article.publishDate}</span>
                    </div>
                    
                    <Link to={article.link} className="card-link">
                      <span>Ler Agora</span>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="filters-section">
          <div className="container">
            <div className="filters-wrapper">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="🔍 Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="main-articles-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">📚 Artigos em Destaque</h2>
              <p className="section-subtitle">
                Conteúdo educacional selecionado especialmente para você ({filteredArticles.length} artigos)
              </p>
            </div>
            
            <div className="blog-grid">
              {filteredArticles.map(article => (
                <article key={article.id} className={`blog-card ${article.categoryClass}`}>
                  <div className={`card-category ${article.categoryClass}`}>{article.category}</div>
                  
                  <h3 className="card-title">{article.title}</h3>
                  
                  <p className="card-description">{article.description}</p>
                  
                  <div className="card-meta">
                    <span className="read-time">{article.readTime}</span>
                    <span className="publish-date">{article.publishDate}</span>
                  </div>
                  
                  <Link to={article.link} className="card-link">
                    <span>Ler Artigo</span>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>📈 Pronto para Transformar suas Finanças?</h2>
              <p>Acesse nosso dashboard completo e comece a investir com inteligência</p>
              <Link to="/" className="cta-button">
                Voltar ao Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
import React, { useState, useMemo } from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import { Link } from 'react-router-dom';
import { blogPageData } from '../data/mockData';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 24 },
    { id: 'urgent', name: 'Urgente', count: 6 },
    { id: 'investment', name: 'Investimentos', count: 8 },
    { id: 'educational', name: 'Educacional', count: 5 },
    { id: 'tips', name: 'Dicas', count: 3 },
    { id: 'planning', name: 'Planejamento', count: 2 }
  ];

  const filteredArticles = useMemo(() => {
    if (activeFilter === 'all') {
      return blogPageData.articles;
    }
    return blogPageData.articles.filter(article => 
      article.category === activeFilter
    );
  }, [activeFilter]);

  const mainArticle = filteredArticles[0];
  const sidebarArticles = filteredArticles.slice(1, 6);
  const allArticles = filteredArticles.slice(6);

  return (
    <div className="blog-page">
      <Header onNavigate={() => {}} />
      
      <div className="blog-container">
        {/* Header */}
        <header className="blog-header">
          <h1 className="blog-title">Central de Notícias Financeiras</h1>
          <p className="blog-subtitle">
            Informações atualizadas dos principais veículos de comunicação financeira do país
          </p>
          
          
        </header>

        {/* Filtros */}
        <div className="blog-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grid Principal */}
        <div className="news-grid">
          {/* Notícia Principal */}
          {mainArticle && (
            <article 
              className="main-news"
              onClick={() => mainArticle.url && window.open(mainArticle.url, '_blank')}
            >
              <div className="main-news-image">
                �
              </div>
              <div className="main-news-content">
                <span className="main-news-category">{mainArticle.category.toUpperCase()}</span>
                <h2 className="main-news-title">{mainArticle.title}</h2>
                <p className="main-news-summary">{mainArticle.excerpt}</p>
                <div className="main-news-meta">
                  <span>⏱️ {mainArticle.readTime}</span>
                  <span>📅 {mainArticle.date}</span>
                  <span>👤 {mainArticle.author}</span>
                </div>
              </div>
            </article>
          )}

          {/* Sidebar */}
          <aside className="news-sidebar">
            <h3 className="sidebar-section-title">🔥 Últimas Notícias</h3>
            {sidebarArticles.map((article, index) => (
              <article 
                key={index} 
                className="sidebar-news"
                onClick={() => article.url && window.open(article.url, '_blank')}
              >
                <h4 className="sidebar-news-title">{article.title}</h4>
                <div className="sidebar-news-meta">
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
              </article>
            ))}
          </aside>
        </div>

        {/* Todas as Notícias */}
        <section className="all-news-section">
          <h2 className="section-title">📰 Todas as Notícias</h2>
          <div className="all-news-grid">
            {allArticles.map((article, index) => (
              <article key={index} className="news-card">
                <span className="news-card-category">{article.category.toUpperCase()}</span>
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-summary">{article.excerpt}</p>
                <div className="news-card-meta">
                  <div>
                    <span>⏱️ {article.readTime}</span>
                    <span> • </span>
                    <span>📅 {article.date}</span>
                    <span> • </span>
                    <span>👤 {article.author}</span>
                  </div>
                  {article.url ? (
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="read-more-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ler mais
                    </a>
                  ) : (
                    <Link to={`/blog/${article.id}`} className="read-more-btn">Ler mais</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Seção de volta à home */}
        <section className="back-home-section">
          <div className="back-home-content">
            <h2>📊 Acompanhe os Dados de Endividamento</h2>
            <p>Volte ao dashboard principal para acompanhar os dados atualizados sobre endividamento brasileiro</p>
            <Link to="/" className="back-button">Voltar ao Dashboard</Link>
            
            
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogSectionProps {
  onCTAClick: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onCTAClick }) => {
  const blogPosts = [
    {
      id: 1,
      category: "Iniciante",
      categoryColor: "green",
      readTime: "5 min",
      title: "5 Passos para Começar a Investir do Zero 🚀",
      description: "Organize suas finanças, defina objetivos claros e dê o primeiro passo rumo à independência financeira. Guia completo para iniciantes.",
      link: "/blog/primeiros-passos-investir",
      urgent: false
    },
    {
      id: 2,
      category: "Cartão",
      categoryColor: "orange", 
      readTime: "6 min",
      title: "Como Evitar Dívidas no Cartão de Crédito? �",
      description: "Juros de até 445% ao ano! Aprenda estratégias práticas para não cair na armadilha do rotativo e controlar suas finanças.",
      link: "/blog/evitar-dividas-cartao-credito",
      urgent: false
    },
    {
      id: 3,
      category: "Urgente",
      categoryColor: "red",
      readTime: "3 min", 
      title: "BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025",
      description: "Banco Central estuda regulamentação após explosão de 187% no uso da modalidade. Especialistas alertam para riscos sistêmicos.",
      link: "/noticia/pix-parcelado-2025",
      urgent: true
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Últimas do Blog</h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-meta">
                <span className={`blog-category ${post.categoryColor}`}>
                  {post.category}
                </span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              
              <Link to={post.link} className="blog-link">
                Ler mais →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
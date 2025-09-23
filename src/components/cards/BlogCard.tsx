import React from 'react';

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime?: string;
  onReadMore: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  date, 
  category, 
  title, 
  excerpt, 
  readTime,
  onReadMore
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <article className="blog-card">
      <div className="blog-card__meta">
        <span className="blog-card__date">{formatDate(date)}</span>
        <span className="blog-card__category">{category}</span>
        {readTime && <span className="blog-card__read-time">{readTime}</span>}
      </div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <button 
        className="blog-card__link" 
        onClick={onReadMore}
        type="button"
      >
        Ler mais →
      </button>
    </article>
  );
};

export default React.memo(BlogCard);
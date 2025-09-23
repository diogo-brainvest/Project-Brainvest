import React from 'react';
import BlogCard from '../cards/BlogCard';
import { blogData } from '../../data/mockData';

interface BlogSectionProps {
  onCTAClick: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onCTAClick }) => (
  <section className="blog-preview" id="blog">
    <div className="container">
      <h2 className="section__title">Últimas do Blog</h2>
      <div className="blog__grid">
        {blogData.map(post => (
          <BlogCard
            key={post.id}
            date={post.date}
            category={post.category}
            title={post.title}
            excerpt={post.excerpt}
            readTime={post.readTime}
            onReadMore={onCTAClick}
          />
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(BlogSection);
import React from 'react';
import { useEndividamentoData, useEstatisticasGerais } from '../hooks/useEndividamentoData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import DashboardSection from '../components/sections/DashboardSection';
import TipsSection from '../components/sections/TipsSection';
import BlogSection from '../components/sections/BlogSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/sections/Footer';
import './Home.css';
import '../components/RefactoredStyles.css';

const Home: React.FC = () => {
  const { data: endividamentoData, loading: loadingEndividamento, error: errorEndividamento } = useEndividamentoData();
  const { stats, loading: loadingStats, error: errorStats } = useEstatisticasGerais();
  const { handleNavigateToSection, handleCTAClick } = useSmoothScroll();
  
  useScrollAnimation({ 
    selectors: ['.stat-card', '.dashboard-card', '.tip-card', '.blog-card'],
    threshold: 150
  });

  return (
    <div className="home-container">
      <Header onNavigate={handleNavigateToSection} />
      
      <HeroSection 
        stats={stats} 
        loading={loadingStats} 
        error={errorStats} 
        onCTAClick={handleCTAClick} 
        onNavigateToData={() => handleNavigateToSection('dados')}
      />
      
      <DashboardSection 
        data={endividamentoData} 
        loading={loadingEndividamento} 
        error={errorEndividamento} 
      />
      
      <TipsSection onCTAClick={handleCTAClick} />
      
      <BlogSection onCTAClick={handleCTAClick} />
      
      <CTASection onCTAClick={handleCTAClick} />
      
      <Footer />
    </div>
  );
};

export default Home;
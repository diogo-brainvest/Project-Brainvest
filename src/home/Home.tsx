import React, { useEffect, useState } from 'react';
import { useEndividamentoData, useEstatisticasGerais } from '../hooks/useEndividamentoData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// Dynamic imports to avoid SSR issues
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
  const [isClient, setIsClient] = useState(false);
  const [renderReady, setRenderReady] = useState(false);

  // Ensure we're on the client
  useEffect(() => {
    setIsClient(true);
    // Add small delay to ensure all components are loaded
    const timer = setTimeout(() => {
      setRenderReady(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const { data: endividamentoData, loading: loadingEndividamento, error: errorEndividamento } = useEndividamentoData();
  const { stats, loading: loadingStats, error: errorStats } = useEstatisticasGerais();
  const { handleNavigateToSection, handleCTAClick } = useSmoothScroll();
  
  // Only initialize animations when ready
  useScrollAnimation({ 
    selectors: renderReady ? ['.stat-card', '.dashboard-card', '.tip-card', '.blog-card'] : [],
    threshold: 150
  });

  // Show loading state during hydration
  if (!isClient || !renderReady) {
    return (
      <div className="home-container" style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: '#0F172A'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3B82F6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <p>Carregando Brainvest...</p>
        </div>
      </div>
    );
  }

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
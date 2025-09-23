import React, { useEffect, useState } from 'react';
import { useEndividamentoData, useEstatisticasGerais } from '../hooks/useEndividamentoData';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import DashboardSection from '../components/sections/DashboardSection';
import TipsSection from '../components/sections/TipsSection';
import BlogSection from '../components/sections/BlogSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/sections/Footer';
import './Home.production.css';

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: endividamentoData, loading: loadingEndividamento, error: errorEndividamento } = useEndividamentoData();
  const { stats, loading: loadingStats, error: errorStats } = useEstatisticasGerais();
  const { handleNavigateToSection, handleCTAClick } = useSmoothScroll();

  // Loading state mais simples
  if (!mounted) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px'
      }}>
        Carregando Brainvest...
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
import React, { useEffect, useState } from 'react';
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

/**
 * Home Component - Página principal do Finance Helper
 * 
 * Componente refatorado com:
 * - Separação clara de responsabilidades
 * - Componentes extraídos para arquivos separados
 * - Hooks customizados para lógica reutilizável
 * - Dados mockados baseados em fontes reais
 * - Estrutura limpa e maintível
 * - Proteção contra SSR/hidratation issues
 */
const Home: React.FC = () => {
  // Add state to check if we're on the client
  const [mounted, setMounted] = useState(false);
  
  // Hooks para dados
  const { data: endividamentoData, loading: loadingEndividamento, error: errorEndividamento } = useEndividamentoData();
  const { stats, loading: loadingStats, error: errorStats } = useEstatisticasGerais();
  
  // Hooks para interações
  const { handleNavigateToSection, handleCTAClick, initializeSmoothScroll } = useSmoothScroll();
  
  // Hook para animações
  useScrollAnimation({ 
    selectors: ['.stat-card', '.dashboard-card', '.tip-card', '.blog-card'],
    threshold: 150
  });

  // Initialize behaviors only on client
  useEffect(() => {
    setMounted(true);
    const cleanup = initializeSmoothScroll();
    return cleanup;
  }, [initializeSmoothScroll]);

  // Show a simple loading state if not mounted yet
  if (!mounted) {
    return (
      <div className="home-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Carregando...</p>
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
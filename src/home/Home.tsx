import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEndividamentoData, useEstatisticasGerais } from '../hooks/useEndividamentoData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import DashboardSection from '../components/sections/DashboardSection';
import BlogSection from '../components/sections/BlogSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/sections/Footer';
import './Home.css';
import '../components/RefactoredStyles.css';

/**
 * Home Component - Página principal do Probono Finance
 * 
 * Componente refatorado com:
 * - Separação clara de responsabilidades
 * - Componentes extraídos para arquivos separados
 * - Hooks customizados para lógica reutilizável
 * - Dados mockados baseados em fontes reais
 * - Estrutura limpa e maintível
 */
const Home: React.FC = () => {
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

  // Inicialização de comportamentos
  useEffect(() => {
    const cleanup = initializeSmoothScroll();
    return cleanup;
  }, [initializeSmoothScroll]);

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
      
      {/* Seção de Alerta PIX Parcelado */}
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
      
      <BlogSection onCTAClick={handleCTAClick} />
      
      <CTASection onCTAClick={handleCTAClick} />
      
      <Footer />
    </div>
  );
};

export default Home;
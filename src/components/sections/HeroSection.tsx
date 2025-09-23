import React from 'react';
import StatCard from '../cards/StatCard';
import LoadingSpinner from '../LoadingSpinner';
import type { EstatisticasGerais } from '../../types';

interface HeroSectionProps {
  stats: EstatisticasGerais | null;
  loading: boolean;
  error: string | null;
  onCTAClick: () => void;
  onNavigateToData: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  stats, 
  loading, 
  error, 
  onCTAClick,
  onNavigateToData 
}) => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">
          Transforme sua 
          <span className="highlight"> Situação Financeira</span>
          <br />com Dados Reais
        </h1>
        <p className="hero__subtitle">
          Descubra insights sobre o endividamento brasileiro e 
          encontre caminhos práticos para sua liberdade financeira
        </p>
        <div className="hero__cta">
          <button 
            className="btn btn--primary" 
            onClick={onCTAClick}
            type="button"
          >
            Começar Agora
          </button>
          <button 
            className="btn btn--secondary" 
            onClick={onNavigateToData}
            type="button"
          >
            Ver Dados
          </button>
        </div>
      </div>
      
      <div className="hero__stats">
        {loading ? (
          <div className="stats-loading">
            <LoadingSpinner size="large" />
            <p>Carregando estatísticas...</p>
          </div>
        ) : error ? (
          <div className="stats-error">
            <p>Erro ao carregar estatísticas</p>
          </div>
        ) : stats ? (
          <>
            <StatCard 
              value={`${stats.percentualEndividados}%`}
              label="das famílias brasileiras estão endividadas"
              trend={`↑ ${stats.crescimentoAnual}% ao ano`}
            />
            <StatCard 
              value={`R$ ${(stats.divideMediaFamilia / 1000).toFixed(1)}k`}
              label="média de dívida por família"
              trend="Fonte: SPC Brasil"
            />
            <StatCard 
              value={`${stats.familiasMuitoEndividadas}%`}
              label="não conseguem pagar as contas"
              trend="Situação crítica"
            />
          </>
        ) : null}
      </div>
    </div>
  </section>
);

export default React.memo(HeroSection);
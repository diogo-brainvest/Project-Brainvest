import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import type { EndividamentoData } from '../../types';
import './DashboardSection.css';

interface DashboardSectionProps {
  data: EndividamentoData | null;
  loading: boolean;
  error: string | null;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ 
  data, 
  loading, 
  error 
}) => {
  if (loading) {
    return (
      <section className="dashboard-section">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Carregando dados...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="dashboard-section">
        <div className="container">
          <div className="error-state">
            <p>Erro ao carregar dados: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="dashboard-section" id="dados">
      <div className="container">
        <header className="dashboard-header">
          <h2 className="section-title">Panorama do Endividamento</h2>
          <p className="section-subtitle">
            Análise detalhada baseada em dados do Banco Central e SPC Brasil
          </p>
        </header>

        <div className="dashboard-grid">
          {/* Card Regional */}
          <div className="dashboard-card regional-card">
            <div className="card-header">
              <div className="card-icon regional-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Por Região</h3>
            </div>
            
            <div className="chart-container">
              {[
                { name: 'Sudeste', percentage: 83.3, color: '#ef4444' },
                { name: 'Sul', percentage: 81.7, color: '#f97316' },
                { name: 'Centro-Oeste', percentage: 80.2, color: '#eab308' },
                { name: 'Nordeste', percentage: 78.9, color: '#22c55e' },
                { name: 'Norte', percentage: 76.8, color: '#3b82f6' }
              ].map((region, index) => (
                <div key={region.name} className="chart-item">
                  <div className="item-label">
                    <span className="region-name">{region.name}</span>
                    <span className="region-percentage">{region.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${region.percentage}%`,
                        backgroundColor: region.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="card-insight">
              <div className="insight-icon">💡</div>
              <div className="insight-content">
                <strong>Destaque Regional:</strong> Sudeste lidera com 83.3% de endividamento
              </div>
            </div>
          </div>

          {/* Card Faixa Etária */}
          <div className="dashboard-card age-card">
            <div className="card-header">
              <div className="card-icon age-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.53 7H17c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h1v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5V4c0-1.11-.89-2-2-2s-2 .89-2 2v6c0 .83.67 1.5 1.5 1.5h1zm1.5 1h-1c-.83 0-1.5.67-1.5 1.5v8h2v-6h2.5l-2.54-7.63-.46 1.13z"/>
                </svg>
              </div>
              <h3>Por Faixa Etária</h3>
            </div>

            <div className="chart-container">
              {[
                { range: '26-35 anos', percentage: 87.1, color: '#8b5cf6' },
                { range: '36-45 anos', percentage: 86.8, color: '#06b6d4' },
                { range: '46-55 anos', percentage: 79.4, color: '#10b981' },
                { range: '18-25 anos', percentage: 74.2, color: '#f59e0b' },
                { range: '55+ anos', percentage: 68.9, color: '#6366f1' }
              ].map((age, index) => (
                <div key={age.range} className="chart-item">
                  <div className="item-label">
                    <span className="age-range">{age.range}</span>
                    <span className="age-percentage">{age.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${age.percentage}%`,
                        backgroundColor: age.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="card-insight warning">
              <div className="insight-icon">⚠️</div>
              <div className="insight-content">
                <strong>Maior endividamento:</strong> 26-35 anos (87.1%)
              </div>
            </div>
          </div>

          {/* Card Tipos de Dívida */}
          <div className="dashboard-card debt-card">
            <div className="card-header">
              <div className="card-icon debt-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                </svg>
              </div>
              <h3>Tipos de Dívida</h3>
            </div>

            <div className="chart-container">
              {[
                { type: 'Cartão de Crédito', percentage: 89.2, color: '#dc2626', icon: '💳' },
                { type: 'Outros', percentage: 52.1, color: '#7c3aed', icon: '📄' },
                { type: 'Financ. Veículo', percentage: 24.3, color: '#059669', icon: '🚗' },
                { type: 'Financ. Imobiliário', percentage: 18.9, color: '#0891b2', icon: '🏠' },
                { type: 'Empréstimo Consignado', percentage: 15.7, color: '#ea580c', icon: '💰' },
                { type: 'Cheque Especial', percentage: 12.8, color: '#7c2d12', icon: '🏦' }
              ].map((debt, index) => (
                <div key={debt.type} className="chart-item">
                  <div className="item-label">
                    <span className="debt-icon">{debt.icon}</span>
                    <span className="debt-type">{debt.type}</span>
                    <span className="debt-percentage">{debt.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${debt.percentage}%`,
                        backgroundColor: debt.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="card-insight critical">
              <div className="insight-icon">🚨</div>
              <div className="insight-content">
                <strong>Insight:</strong> Cartão de crédito representa 89.2% das dívidas
              </div>
            </div>
          </div>
        </div>

        {data?.metadata && (
          <div className="dashboard-metadata">
            <div className="metadata-grid">
              <div className="metadata-item">
                <strong>Fonte:</strong> {data.metadata.fonte}
              </div>
              <div className="metadata-item">
                <strong>Última Atualização:</strong> {
                  new Date(data.metadata.ultimaAtualizacao).toLocaleDateString('pt-BR')
                }
              </div>
              <div className="metadata-item">
                <strong>Confiabilidade:</strong> {data.metadata.confiabilidade}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(DashboardSection);
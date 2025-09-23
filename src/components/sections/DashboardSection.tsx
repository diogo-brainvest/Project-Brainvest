import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import RegionalChart from '../charts/RegionalChart';
import AgeChart from '../charts/AgeChart';
import DebtTypeChart from '../charts/DebtTypeChart';
import type { EndividamentoData } from '../../types';

interface DashboardSectionProps {
  data: EndividamentoData | null;
  loading: boolean;
  error: string | null;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ 
  data, 
  loading, 
  error 
}) => (
  <section className="dashboard" id="dados">
    <div className="container">
      <h2 className="section__title">Panorama do Endividamento</h2>
      
      {loading ? (
        <div className="dashboard-loading">
          <LoadingSpinner size="large" />
          <p>Carregando dados do endividamento...</p>
        </div>
      ) : error ? (
        <div className="dashboard-error">
          <p>Erro ao carregar dados do dashboard</p>
          <p className="error-details">{error}</p>
        </div>
      ) : data ? (
        <div className="dashboard__grid">
          <div className="dashboard-card">
            <h4>📍 Por Região</h4>
            <RegionalChart 
              data={data.porRegiao} 
              animated={true}
              showInsights={true}
            />
          </div>
          
          <div className="dashboard-card">
            <h4>👥 Por Faixa Etária</h4>
            <AgeChart 
              data={data.porIdade} 
              animated={true}
              showInsights={true}
            />
          </div>
          
          <div className="dashboard-card">
            <h4>💳 Tipos de Dívida</h4>
            <DebtTypeChart 
              data={data.tiposDivida} 
              animated={true}
              showInsights={true}
            />
          </div>
          
          {data.metadata && (
            <div className="dashboard-metadata">
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
          )}
        </div>
      ) : null}
    </div>
  </section>
);

export default React.memo(DashboardSection);
import React from 'react';
import { alertasCriticos2025 } from '../../data/mockData';

interface AlertasCriticos2025Props {
  showDetails?: boolean;
}

const AlertasCriticos2025: React.FC<AlertasCriticos2025Props> = ({ showDetails = false }) => {
  const alertasCriticos = alertasCriticos2025.filter(alerta => alerta.gravidade === 'Crítica');
  const alertasAltos = alertasCriticos2025.filter(alerta => alerta.gravidade === 'Alta');

  return (
    <div className="alertas-criticos-2025">
      <div className="alertas-header">
        <h3>🚨 Alertas Críticos 2025</h3>
        <span className="live-indicator">● AO VIVO</span>
      </div>
      
      <div className="alertas-grid">
        {alertasCriticos.map((alerta, index) => (
          <div key={index} className="alerta-card critical">
            <div className="alerta-icon">⚠️</div>
            <div className="alerta-content">
              <h4>{alerta.tipo}</h4>
              <div className="alerta-valor">{alerta.percentual}%</div>
              <p>{alerta.descricao}</p>
            </div>
            <div className="alerta-status critical">CRÍTICO</div>
          </div>
        ))}
        
        {alertasAltos.map((alerta, index) => (
          <div key={index} className="alerta-card high">
            <div className="alerta-icon">⚡</div>
            <div className="alerta-content">
              <h4>{alerta.tipo}</h4>
              <div className="alerta-valor">{alerta.percentual}%</div>
              <p>{alerta.descricao}</p>
            </div>
            <div className="alerta-status high">ALTO</div>
          </div>
        ))}
      </div>

      {showDetails && (
        <div className="destaque-modalidade">
          <h4>🚀 Modalidade em Explosão</h4>
          <div className="modalidade-card">
            <div className="modalidade-nome">PIX Parcelado</div>
            <div className="modalidade-crescimento">
              +245.7%
            </div>
            <p>Modalidade de maior crescimento em 2025</p>
            <div className="modalidade-risco">Risco: Alto</div>
          </div>
        </div>
      )}
      
      <div className="fonte-alertas">
        <small>
          Fontes: SPC Brasil, Banco Central, CNC, Serasa • 
          Atualizado: 23/09/2025 14:30
        </small>
      </div>
    </div>
  );
};

export default React.memo(AlertasCriticos2025);
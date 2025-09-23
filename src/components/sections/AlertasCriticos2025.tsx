import React from 'react';
import { useAlertasCriticos2025, useNovasModalidades2025 } from '../../hooks/useEndividamentoData';

interface AlertasCriticos2025Props {
  showDetails?: boolean;
}

const AlertasCriticos2025: React.FC<AlertasCriticos2025Props> = ({ showDetails = false }) => {
  const { alertasCriticos, alertasAltos } = useAlertasCriticos2025();
  const { modalidadeMaiorCrescimento } = useNovasModalidades2025();

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
              <div className="alerta-valor">{alerta.valor}</div>
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
              <div className="alerta-valor">{alerta.valor}</div>
              <p>{alerta.descricao}</p>
            </div>
            <div className="alerta-status high">ALTO</div>
          </div>
        ))}
      </div>

      {showDetails && modalidadeMaiorCrescimento && (
        <div className="destaque-modalidade">
          <h4>🚀 Modalidade em Explosão</h4>
          <div className="modalidade-card">
            <div className="modalidade-nome">{modalidadeMaiorCrescimento.nome}</div>
            <div className="modalidade-crescimento">
              +{modalidadeMaiorCrescimento.crescimento2025.toFixed(1)}%
            </div>
            <p>{modalidadeMaiorCrescimento.descricao}</p>
            <div className="modalidade-risco">{modalidadeMaiorCrescimento.risco}</div>
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
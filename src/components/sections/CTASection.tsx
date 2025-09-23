import React from 'react';

interface CTASectionProps {
  onCTAClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onCTAClick }) => (
  <section className="cta-section">
    <div className="container">
      <h2>Comece Sua Jornada Hoje</h2>
      <p>Não deixe as dívidas controlarem sua vida. Tome o controle agora.</p>
      <button 
        className="btn btn--primary btn--large" 
        onClick={onCTAClick}
        type="button"
      >
        Baixar Planilha Gratuita
      </button>
    </div>
  </section>
);

export default React.memo(CTASection);
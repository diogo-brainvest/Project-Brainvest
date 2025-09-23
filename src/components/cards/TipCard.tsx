import React from 'react';

interface TipCardProps {
  icon: string;
  title: string;
  description: string;
  statistic?: string;
  onLearnMore: () => void;
}

const TipCard: React.FC<TipCardProps> = ({ 
  icon, 
  title, 
  description, 
  statistic,
  onLearnMore 
}) => (
  <div className="tip-card">
    <div className="tip-card__icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    {statistic && (
      <div className="tip-stats">
        <span>{statistic}</span>
      </div>
    )}
    <button 
      className="tip-card__link" 
      onClick={onLearnMore}
      type="button"
    >
      Saiba mais →
    </button>
  </div>
);

export default React.memo(TipCard);
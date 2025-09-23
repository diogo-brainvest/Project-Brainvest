import React from 'react';
import TipCard from '../cards/TipCard';
import { tipsData } from '../../data/mockData';

interface TipsSectionProps {
  onCTAClick: () => void;
}

const TipsSection: React.FC<TipsSectionProps> = ({ onCTAClick }) => (
  <section className="tips" id="dicas">
    <div className="container">
      <h2 className="section__title">Estratégias Comprovadas</h2>
      <div className="tips__grid">
        {tipsData.map(tip => (
          <TipCard
            key={tip.id}
            icon={tip.icon}
            title={tip.title}
            description={tip.description}
            statistic={tip.statistic}
            onLearnMore={onCTAClick}
          />
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(TipsSection);
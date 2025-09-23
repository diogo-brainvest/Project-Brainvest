import React, { useMemo } from 'react';
import { AGE_CONFIG } from '../../config/constants';
import { formatPercentage, generateInsight } from '../../utils';
import type { AgeData } from '../../types';
import './Charts.css';

interface AgeChartProps {
  data: AgeData;
  animated?: boolean;
  showInsights?: boolean;
}

const AgeChart: React.FC<AgeChartProps> = ({ 
  data, 
  animated = true,
  showInsights = true 
}) => {
  const chartData = useMemo(() => {
    const ageGroups = AGE_CONFIG.map(config => ({
      ...config,
      value: data[config.key as keyof AgeData],
    }));

    const sortedGroups = ageGroups.sort((a, b) => b.value - a.value);
    const maxValue = Math.max(...Object.values(data));
    const topGroup = sortedGroups[0];
    const dataRecord = Object.entries(data).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as Record<string, number>);
    const insight = generateInsight(dataRecord, 'age');

    return { ageGroups, maxValue, topGroup, insight };
  }, [data]);

  const { ageGroups, maxValue, topGroup, insight } = chartData;

  return (
    <div className="age-chart">
      <div className="age-bars">
        {ageGroups.map((group, index) => (
          <div 
            key={group.key} 
            className={`age-bar-item ${animated ? 'animated' : ''}`}
            style={animated ? { animationDelay: `${index * 100}ms` } : {}}
          >
            <div className="age-bar-info">
              <span className="age-bar-label">{group.name}</span>
              <span className="age-bar-value">{formatPercentage(group.value)}</span>
            </div>
            <div className="age-bar-container">
              <div 
                className={`age-bar-fill ${animated ? 'animated-fill' : ''}`}
                style={{ 
                  '--target-width': `${(group.value / maxValue) * 100}%`,
                  width: animated ? '0%' : `${(group.value / maxValue) * 100}%`,
                  backgroundColor: group.color,
                  animationDelay: animated ? `${index * 150}ms` : undefined,
                } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
      
      {showInsights && (
        <div className="age-insights">
          <div className="age-summary">
            <div className="age-highlight primary">
              <span className="highlight-icon">🏆</span>
              <div>
                <span>Maior endividamento:</span>
                <strong>{topGroup.name} ({formatPercentage(topGroup.value)})</strong>
              </div>
            </div>
          </div>
          
          <div className="insight-item tip">
            <span className="tip-icon">💡</span>
            <p>
              <strong>Análise Demográfica:</strong> {insight}. 
              Essa faixa etária geralmente possui maiores compromissos financeiros 
              como financiamento imobiliário e gastos familiares.
            </p>
          </div>
          
          <div className="insight-item warning">
            <span className="warning-icon">⚠️</span>
            <p>
              <strong>Alerta Etário:</strong> Pessoas entre 36-45 anos devem ter especial 
              atenção ao planejamento financeiro para evitar o super-endividamento.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(AgeChart);
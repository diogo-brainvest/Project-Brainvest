import React, { useMemo } from 'react';
import { DEBT_TYPE_CONFIG } from '../../config/constants';
import { formatPercentage, generateInsight } from '../../utils';
import type { DebtTypeData } from '../../types';
import './Charts.css';

interface DebtTypeChartProps {
  data: DebtTypeData;
  animated?: boolean;
  showInsights?: boolean;
}

const DebtTypeChart: React.FC<DebtTypeChartProps> = ({ 
  data, 
  animated = true,
  showInsights = true 
}) => {
  const chartData = useMemo(() => {
    const debtTypes = DEBT_TYPE_CONFIG.map(config => ({
      ...config,
      value: data[config.key],
    }));

    const sortedTypes = debtTypes.sort((a, b) => b.value - a.value);
    const maxValue = Math.max(...sortedTypes.map(type => type.value));
    const topDebt = sortedTypes[0];
    const dataRecord = Object.entries(data).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as Record<string, number>);
    const insight = generateInsight(dataRecord, 'debt');

    return { sortedTypes, maxValue, topDebt, insight };
  }, [data]);

  const { sortedTypes, maxValue, topDebt, insight } = chartData;

  return (
    <div className="debt-type-chart">
      <div className="chart-content">
        {sortedTypes.map((type, index) => (
          <div 
            key={type.key} 
            className={`debt-type-item ${animated ? 'animated' : ''}`}
            style={animated ? { animationDelay: `${index * 100}ms` } : {}}
          >
            <div className="debt-type-info">
              <span className="debt-type-icon">{type.icon}</span>
              <span className="debt-type-name">{type.name}</span>
            </div>
            <div className="debt-type-bar">
              <div 
                className={`debt-type-fill ${animated ? 'animated-fill' : ''}`}
                style={{ 
                  width: `${(type.value / maxValue) * 100}%`,
                  backgroundColor: type.color,
                  animationDelay: animated ? `${index * 150}ms` : undefined,
                }}
              />
              <span className="debt-type-value">
                {formatPercentage(type.value)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {showInsights && (
        <div className="debt-insights">
          <div className="insight-item primary">
            <span className="insight-icon">💡</span>
            <p>
              <strong>Insight:</strong> {insight}
            </p>
          </div>
          <div className="insight-item tip">
            <span className="tip-icon">🎯</span>
            <p>
              <strong>Dica:</strong> Priorize quitar dívidas de {topDebt.name.toLowerCase()} 
              devido às altas taxas de juros ({formatPercentage(topDebt.value)}).
            </p>
          </div>
          <div className="insight-item warning">
            <span className="warning-icon">⚠️</span>
            <p>
              <strong>Alerta:</strong> Evite usar apenas o pagamento mínimo do cartão, 
              isso pode aumentar sua dívida exponencialmente.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(DebtTypeChart);
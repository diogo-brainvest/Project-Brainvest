import React, { useMemo } from 'react';
import { REGIONAL_CONFIG } from '../../config/constants';
import { formatPercentage, generateInsight } from '../../utils';
import type { RegionalData } from '../../types';
import './Charts.css';

interface RegionalChartProps {
  data: RegionalData;
  animated?: boolean;
  showInsights?: boolean;
}

const RegionalChart: React.FC<RegionalChartProps> = ({ 
  data, 
  animated = true,
  showInsights = true 
}) => {
  const chartData = useMemo(() => {
    const regions = REGIONAL_CONFIG.map(config => ({
      ...config,
      value: data[config.key as keyof RegionalData],
    }));

    const sortedRegions = regions.sort((a, b) => b.value - a.value);
    const maxValue = Math.max(...Object.values(data));
    const topRegion = sortedRegions[0];
    const dataRecord = Object.entries(data).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as Record<string, number>);
    const insight = generateInsight(dataRecord, 'regional');

    return { sortedRegions, maxValue, topRegion, insight };
  }, [data]);

  const { sortedRegions, maxValue, topRegion, insight } = chartData;

  return (
    <div className="regional-chart">
      <div className="chart-bars">
        {sortedRegions.map((region, index) => (
          <div 
            key={region.key} 
            className={`chart-bar-item ${animated ? 'animated' : ''}`}
            style={animated ? { animationDelay: `${index * 100}ms` } : {}}
          >
            <div className="chart-bar-label">{region.name}</div>
            <div className="chart-bar-container">
              <div 
                className={`chart-bar-fill ${animated ? 'animated-fill' : ''}`}
                style={{ 
                  '--target-width': `${(region.value / maxValue) * 100}%`,
                  width: animated ? '0%' : `${(region.value / maxValue) * 100}%`,
                  backgroundColor: region.color,
                  animationDelay: animated ? `${index * 150}ms` : undefined,
                } as React.CSSProperties}
              />
              <span className="chart-bar-value">{formatPercentage(region.value)}</span>
            </div>
          </div>
        ))}
      </div>
      
      {showInsights && (
        <div className="regional-insights">
          <div className="insight-item primary">
            <span className="insight-icon">📍</span>
            <p>
              <strong>Destaque Regional:</strong> {insight}
            </p>
          </div>
          <div className="insight-item tip">
            <span className="tip-icon">💡</span>
            <p>
              <strong>Análise:</strong> A região {topRegion.name} apresenta o maior índice 
              de endividamento ({formatPercentage(topRegion.value)}), possivelmente devido 
              ao maior acesso ao crédito.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(RegionalChart);
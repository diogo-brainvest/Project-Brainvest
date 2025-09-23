import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, trend }) => (
  <div className="stat-card">
    <h3 className="stat-value">{value}</h3>
    <p className="stat-label">{label}</p>
    {trend && <span className="stat-trend">{trend}</span>}
  </div>
);

export default React.memo(StatCard);
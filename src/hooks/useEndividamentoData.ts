import { useState, useEffect } from 'react';
import { mockEndividamentoData, mockEstatisticasGerais } from '../data/mockData';
import type { EndividamentoData, EstatisticasGerais } from '../types';

export const useEndividamentoData = () => {
  const [data, setData] = useState<EndividamentoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data directly without setTimeout to avoid hydration issues
      setData(mockEndividamentoData);
      setLoading(false);
    } catch (err) {
      console.error('Error setting data:', err);
      setError('Erro ao carregar dados');
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export const useEstatisticasGerais = () => {
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setStats(mockEstatisticasGerais);
      setLoading(false);
    } catch (err) {
      console.error('Error setting stats:', err);
      setError('Erro ao carregar estatísticas');
      setLoading(false);
    }
  }, []);

  return { stats, loading, error };
};


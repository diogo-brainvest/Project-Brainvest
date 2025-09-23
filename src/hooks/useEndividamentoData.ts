import { useState, useEffect } from 'react';
import { 
  mockEndividamentoData, 
  mockEstatisticasGerais 
} from '../data/mockData';
import type { EndividamentoData, EstatisticasGerais } from '../types';

export const useEndividamentoData = () => {
  const [data, setData] = useState<EndividamentoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data immediately without delay
      setData(mockEndividamentoData);
      setLoading(false);
    } catch (err) {
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
      setError('Erro ao carregar estatísticas');
      setLoading(false);
    }
  }, []);

  return { stats, loading, error };
};


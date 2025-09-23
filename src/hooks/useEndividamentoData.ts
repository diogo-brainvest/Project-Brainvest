import { useState, useEffect } from 'react';
import type { EndividamentoData, EstatisticasGerais } from '../types';

// Import dados de forma mais segura
let mockEndividamentoData: EndividamentoData | null = null;
let mockEstatisticasGerais: EstatisticasGerais | null = null;

try {
  const mockDataModule = require('../data/mockData');
  mockEndividamentoData = mockDataModule.mockEndividamentoData;
  mockEstatisticasGerais = mockDataModule.mockEstatisticasGerais;
} catch (error) {
  console.error('Error importing mock data:', error);
}

export const useEndividamentoData = () => {
  const [data, setData] = useState<EndividamentoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Add a small delay to ensure proper hydration
    const timer = setTimeout(() => {
      try {
        if (mockEndividamentoData) {
          setData(mockEndividamentoData);
        } else {
          setError('Dados não disponíveis');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error setting data:', err);
        setError('Erro ao carregar dados');
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
};

export const useEstatisticasGerais = () => {
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (mockEstatisticasGerais) {
          setStats(mockEstatisticasGerais);
        } else {
          setError('Estatísticas não disponíveis');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error setting stats:', err);
        setError('Erro ao carregar estatísticas');
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { stats, loading, error };
};


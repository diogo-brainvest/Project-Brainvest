import { useState, useEffect, useCallback } from 'react';
import { 
  mockEndividamentoData, 
  mockEstatisticasGerais,
  novasModalidades2025,
  indicadoresEconomicos2025,
  alertasCriticos2025
} from '../data/mockData';
import type { EndividamentoData, EstatisticasGerais } from '../types';

// Hook simplificado para dados de endividamento usando dados mockados
export const useEndividamentoData = () => {
  const [data, setData] = useState<EndividamentoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simula latência de API real com dados de 2025
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Adiciona pequena variação para simular dados em tempo real
      const dataWithVariation = {
        ...mockEndividamentoData,
        // Simula oscilação real dos dados
        porRegiao: {
          ...mockEndividamentoData.porRegiao,
          sudeste: mockEndividamentoData.porRegiao.sudeste + (Math.random() - 0.5) * 0.2
        }
      };
      
      setData(dataWithVariation);
      
      // Log para desenvolvimento - dados atualizados de 2025
      console.log('📊 Dados de endividamento 2025 carregados:', {
        endividamento: `${dataWithVariation.porRegiao.sudeste.toFixed(1)}%`,
        fonte: dataWithVariation.metadata.fonte,
        ultimaAtualizacao: dataWithVariation.metadata.ultimaAtualizacao
      });
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar dados de endividamento';
      setError(errorMessage);
      console.error('Erro no useEndividamentoData:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { 
    data, 
    loading, 
    error, 
    refetch,
    metadata: data?.metadata 
  };
};

// Hook para estatísticas gerais usando dados mockados
export const useEstatisticasGerais = () => {
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simula um delay de carregamento diferente para demonstrar carregamentos independentes
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStats(mockEstatisticasGerais);
      
      // Log das novas modalidades críticas de 2025
      console.log('⚠️ Alertas críticos 2025:', alertasCriticos2025);
      console.log('🚀 Novas modalidades em alta:', novasModalidades2025.slice(0, 2));
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar estatísticas';
      setError(errorMessage);
      console.error('Erro no useEstatisticasGerais:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const refetch = useCallback(() => {
    fetchStats();
  }, [fetchStats]);

  return { 
    stats, 
    loading, 
    error, 
    refetch,
    metadata: stats?.metadata 
  };
};

// Hook para novas modalidades de crédito 2025
export const useNovasModalidades2025 = () => {
  const [modalidades, setModalidades] = useState(novasModalidades2025);
  const [loading, setLoading] = useState(false);

  const getModalidadeMaiorCrescimento = useCallback(() => {
    return modalidades.reduce((prev, current) => 
      prev.crescimento2025 > current.crescimento2025 ? prev : current
    );
  }, [modalidades]);

  const getModalidadesAltoRisco = useCallback(() => {
    return modalidades.filter(m => m.risco.includes('Alto'));
  }, [modalidades]);

  return {
    modalidades,
    loading,
    modalidadeMaiorCrescimento: getModalidadeMaiorCrescimento(),
    modalidadesAltoRisco: getModalidadesAltoRisco(),
    totalModalidades: modalidades.length
  };
};

// Hook para indicadores econômicos 2025
export const useIndicadoresEconomicos2025 = () => {
  const [indicadores] = useState(indicadoresEconomicos2025);
  
  const getImpactoSelic = useCallback(() => {
    const selic = indicadores.selic;
    if (selic > 10) return 'Alto impacto no crédito';
    if (selic > 7) return 'Médio impacto no crédito';
    return 'Baixo impacto no crédito';
  }, [indicadores]);

  const getStatusInflacao = useCallback(() => {
    const inflacao = indicadores.inflacaoAcumulada;
    if (inflacao > 6) return 'Inflação alta';
    if (inflacao > 4.5) return 'Inflação no teto da meta';
    return 'Inflação controlada';
  }, [indicadores]);

  return {
    indicadores,
    impactoSelic: getImpactoSelic(),
    statusInflacao: getStatusInflacao(),
    poderCompra: indicadores.rendaMediaFamiliar / indicadores.salarioMinimo
  };
};

// Hook para alertas críticos 2025
export const useAlertasCriticos2025 = () => {
  const [alertas] = useState(alertasCriticos2025);
  
  const getAlertasCriticos = useCallback(() => {
    return alertas.filter(alerta => alerta.gravidade === 'Crítica');
  }, [alertas]);

  const getAlertasAltos = useCallback(() => {
    return alertas.filter(alerta => alerta.gravidade === 'Alta');
  }, [alertas]);

  return {
    alertas,
    alertasCriticos: getAlertasCriticos(),
    alertasAltos: getAlertasAltos(),
    totalAlertas: alertas.length
  };
};

// Hook para monitoramento em tempo real (simula atualizações via WebSocket)
export const useRealTimeData2025 = () => {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isConnected, setIsConnected] = useState(true);
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    // Simula atualizações em tempo real a cada 5 minutos
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      setDataChanged(true);
      console.log('📊 Dados atualizados automaticamente:', new Date().toLocaleTimeString());
      
      // Reset após 3 segundos
      setTimeout(() => setDataChanged(false), 3000);
    }, 5 * 60 * 1000);

    // Simula possíveis desconexões (5% chance)
    const connectionCheck = setInterval(() => {
      const connected = Math.random() > 0.05;
      setIsConnected(connected);
      if (!connected) {
        console.warn('🔴 Conexão perdida com servidor de dados');
      }
    }, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(connectionCheck);
    };
  }, []);

  return {
    lastUpdate,
    isConnected,
    dataChanged,
    nextUpdateIn: '5 min',
    status: isConnected ? 'online' : 'offline'
  };
};

// Hook para refresh manual dos dados (útil para testes ou atualizações futuras)
export const useDataRefresh = () => {
  return {
    refreshAll: useCallback(() => {
      // Para dados mockados, podemos simular uma atualização
      console.log('Simulando refresh dos dados...');
      window.location.reload();
    }, []),
    refreshEndividamento: useCallback(() => {
      console.log('Simulando refresh dos dados de endividamento...');
    }, []),
    refreshEstatisticas: useCallback(() => {
      console.log('Simulando refresh das estatísticas...');
    }, []),
  };
};
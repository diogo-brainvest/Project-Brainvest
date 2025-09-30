import React from 'react';

// Utilitários para cache e performance

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos em milliseconds

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    const isExpired = Date.now() - item.timestamp > CACHE_DURATION;
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data as T;
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    const isExpired = Date.now() - item.timestamp > CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }
}

export const cacheManager = new CacheManager();

// Hook para cache de dados com React
export const useCachedData = <T>(
  key: string,
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadData = async () => {
      // Verificar cache primeiro
      const cachedData = cacheManager.get<T>(key);
      if (cachedData) {
        setData(cachedData);
        return;
      }

      // Se não há cache, buscar dados
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFn();
        cacheManager.set(key, result);
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, dependencies);

  return { data, loading, error };
};

// Simular dados instantâneos para melhor UX
export const mockDataInstant = {
  endividamento: {
    porRegiao: { sudeste: 78.3 },
    metadata: { 
      fonte: 'SPC Brasil',
      ultimaAtualizacao: new Date().toISOString()
    }
  },
  estatisticas: {
    familias_endividadas: 78.3,
    inadimplentes: 26.4,
    valor_medio_divida: 4850,
    metadata: {
      fonte: 'SPC Brasil',
      periodo: 'Setembro 2025'
    }
  }
};
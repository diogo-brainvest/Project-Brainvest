export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
};

export const formatCompactNumber = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};

export const calculateGrowthTrend = (current: number, previous: number): {
  percentage: number;
  trend: 'up' | 'down' | 'stable';
} => {
  const diff = current - previous;
  const percentage = (diff / previous) * 100;
  
  return {
    percentage: Math.abs(percentage),
    trend: percentage > 0.1 ? 'up' : percentage < -0.1 ? 'down' : 'stable',
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delay = 1000
): Promise<T> => {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    try {
      return await fn();
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) throw error;
      const currentDelay = delay * attempts;
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }
  
  throw new Error('Max attempts reached');
};

export const generateInsight = (data: Record<string, number>, type: 'regional' | 'age' | 'debt'): string => {
  switch (type) {
    case 'regional':
      const maxRegion = Object.entries(data).reduce((a, b) => a[1] > b[1] ? a : b);
      return `${maxRegion[0]} lidera com ${formatPercentage(maxRegion[1])} de endividamento`;
    
    case 'age':
      const maxAge = Object.entries(data).reduce((a, b) => a[1] > b[1] ? a : b);
      return `Faixa etária ${maxAge[0]} apresenta maior endividamento (${formatPercentage(maxAge[1])})`;
    
    case 'debt':
      const maxDebt = Object.entries(data).reduce((a, b) => a[1] > b[1] ? a : b);
      return `${maxDebt[0]} representa ${formatPercentage(maxDebt[1])} das dívidas`;
    
    default:
      return 'Dados atualizados com sucesso';
  }
};
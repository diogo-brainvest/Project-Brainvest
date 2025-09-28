import type { EndividamentoData, EstatisticasGerais } from '../types';

// Interface específica para dados 2025
export interface EndividamentoData2025 {
  panorama_geral: {
    familias_endividadas: number;
    inadimplentes: number;
    valor_medio_divida: number;
    crescimento_mensal: number;
    projecao_dezembro: number;
  };
  por_regiao: Array<{
    regiao: string;
    percentual: number;
    variacao_mensal: number;
    principal_modalidade: string;
  }>;
  modalidades_credito: Array<{
    tipo: string;
    percentual_familias: number;
    valor_medio: number;
    taxa_juros_media: number;
    crescimento_2025: number;
  }>;
  faixas_etarias: Array<{
    faixa: string;
    percentual: number;
    valor_medio: number;
    tempo_medio_pagamento: number;
  }>;
  indicadores_economicos: {
    selic: number;
    inflacao_acumulada: number;
    desemprego: number;
    renda_media_familiar: number;
  };
  metadata: {
    fonte: string;
    data_atualizacao: string;
    metodologia: string;
  };
}

// Dados principais de endividamento 2025
export const mockEndividamentoData2025: EndividamentoData2025 = {
  panorama_geral: {
    familias_endividadas: 80.9, // SPC Brasil - Setembro 2025
    inadimplentes: 29.8, // Serasa - Setembro 2025  
    valor_medio_divida: 5247, // Média atualizada
    crescimento_mensal: 0.8, // Taxa mensal
    projecao_dezembro: 82.5 // Projeção para fim de 2025
  },
  
  por_regiao: [
    {
      regiao: 'Sudeste',
      percentual: 83.3,
      variacao_mensal: 0.9,
      principal_modalidade: 'Cartão de Crédito'
    },
    {
      regiao: 'Sul',
      percentual: 81.7,
      variacao_mensal: 0.6,
      principal_modalidade: 'Financiamento Veicular'
    },
    {
      regiao: 'Centro-Oeste',
      percentual: 80.2,
      variacao_mensal: 1.2,
      principal_modalidade: 'Cartão de Crédito'
    },
    {
      regiao: 'Nordeste',
      percentual: 78.9,
      variacao_mensal: 1.1,
      principal_modalidade: 'Crediário'
    },
    {
      regiao: 'Norte',
      percentual: 76.8,
      variacao_mensal: 1.4,
      principal_modalidade: 'Cartão de Crédito'
    }
  ],

  modalidades_credito: [
    {
      tipo: 'Cartão de Crédito',
      percentual_familias: 89.2,
      valor_medio: 3680,
      taxa_juros_media: 425.6,
      crescimento_2025: 12.3
    },
    {
      tipo: 'Pix Parcelado',
      percentual_familias: 34.7,
      valor_medio: 890,
      taxa_juros_media: 89.2,
      crescimento_2025: 187.4
    },
    {
      tipo: 'Crediário Digital',
      percentual_familias: 52.1,
      valor_medio: 2140,
      taxa_juros_media: 45.8,
      crescimento_2025: 28.9
    },
    {
      tipo: 'Buy Now Pay Later',
      percentual_familias: 28.4,
      valor_medio: 650,
      taxa_juros_media: 15.2,
      crescimento_2025: 156.7
    },
    {
      tipo: 'Financiamento Habitacional',
      percentual_familias: 18.9,
      valor_medio: 189000,
      taxa_juros_media: 11.8,
      crescimento_2025: -5.2
    },
    {
      tipo: 'Financiamento Veicular',
      percentual_familias: 24.3,
      valor_medio: 42000,
      taxa_juros_media: 28.9,
      crescimento_2025: 3.4
    },
    {
      tipo: 'Empréstimo Consignado',
      percentual_familias: 15.7,
      valor_medio: 12400,
      taxa_juros_media: 22.1,
      crescimento_2025: 8.9
    },
    {
      tipo: 'Cheque Especial',
      percentual_familias: 12.8,
      valor_medio: 1890,
      taxa_juros_media: 125.4,
      crescimento_2025: -18.7
    }
  ],

  faixas_etarias: [
    {
      faixa: '18-24 anos',
      percentual: 74.2,
      valor_medio: 2340,
      tempo_medio_pagamento: 14
    },
    {
      faixa: '25-34 anos', 
      percentual: 87.1,
      valor_medio: 6890,
      tempo_medio_pagamento: 28
    },
    {
      faixa: '35-49 anos',
      percentual: 86.8,
      valor_medio: 8940,
      tempo_medio_pagamento: 32
    },
    {
      faixa: '50-64 anos',
      percentual: 79.4,
      valor_medio: 5670,
      tempo_medio_pagamento: 24
    },
    {
      faixa: '65+ anos',
      percentual: 68.9,
      valor_medio: 3120,
      tempo_medio_pagamento: 18
    }
  ],

  indicadores_economicos: {
    selic: 11.25,
    inflacao_acumulada: 4.2,
    desemprego: 7.8,
    renda_media_familiar: 7420
  },

  metadata: {
    fonte: 'SPC Brasil, BC, CNC, Serasa, IBGE',
    data_atualizacao: '2025-09-23',
    metodologia: 'Pesquisa Nacional de Endividamento'
  }
};

// Compatibilidade com interface antiga
export const mockEndividamentoData: EndividamentoData = {
  porRegiao: {
    sudeste: 83.3,
    nordeste: 78.9,
    sul: 81.7,
    norte: 76.8,
    centroOeste: 80.2
  },
  porIdade: {
    '18-25': 74.2,
    '26-35': 87.1,
    '36-45': 86.8,
    '46-55': 79.4,
    '55+': 68.9
  },
  tiposDivida: {
    cartaoCredito: 89.2,
    financiamentoVeiculo: 24.3,
    financiamentoImobiliario: 18.9,
    emprestimoConsignado: 15.7,
    chequeEspecial: 12.8,
    outros: 52.1
  },
  metadata: {
    fonte: 'SPC Brasil, BC, CNC, Serasa, IBGE',
    ultimaAtualizacao: '2025-09-23T14:30:00Z',
    proximaAtualizacao: '2025-10-15T14:30:00Z',
    versao: '4.0.0',
    confiabilidade: 'alta'
  }
};

export const mockEstatisticasGerais: EstatisticasGerais = {
  familiasSemDivida: 19.1,
  familiasMuitoEndividadas: 29.8,
  divideMediaFamilia: 5247,
  percentualEndividados: 80.9,
  crescimentoAnual: 6.8,
  metadata: {
    fonte: 'SPC Brasil, BC, CNC, Serasa',
    ultimaAtualizacao: '2025-09-23T14:30:00Z',
    proximaAtualizacao: '2025-10-15T14:30:00Z',
    versao: '4.0.0',
    confiabilidade: 'alta'
  }
};

// Dados para os hooks especializados de 2025
export const novasModalidades2025 = [
  {
    id: 1,
    nome: 'PIX Parcelado',
    crescimento: 187.4,
    risco: 'crítico',
    percentual_uso: 34.7,
    valor_medio: 890,
    taxa_juros: 89.2
  },
  {
    id: 2,
    nome: 'Buy Now Pay Later',
    crescimento: 156.7,
    risco: 'alto',
    percentual_uso: 28.4,
    valor_medio: 650,
    taxa_juros: 15.2
  },
  {
    id: 3,
    nome: 'Cartão Digital',
    crescimento: 12.3,
    risco: 'médio',
    percentual_uso: 89.2,
    valor_medio: 3680,
    taxa_juros: 425.6
  }
];

export const indicadoresEconomicos2025 = {
  selic: 11.25,
  inflacao: 4.2,
  desemprego: 7.8,
  rendaMediaFamiliar: 7420,
  salarioMinimo: 1412,
  impactoSelic: 'Alto - Encarece o crédito',
  statusInflacao: 'Controlada - Dentro da meta',
  tendencia: 'Piora gradual do endividamento'
};

export const alertasCriticos2025 = [
  {
    id: 1,
    tipo: 'Recorde Histórico',
    gravidade: 'crítica',
    percentual: 80.9,
    descricao: '80,9% das famílias endividadas - maior da história',
    impacto: 'Nacional'
  },
  {
    id: 2,
    tipo: 'PIX Parcelado',
    gravidade: 'crítica',
    percentual: 187.4,
    descricao: 'Crescimento explosivo pode gerar nova bolha',
    impacto: 'Emergente'
  },
  {
    id: 3,
    tipo: 'Jovens Endividados',
    gravidade: 'alta',
    percentual: 87.1,
    descricao: 'Geração 25-34 anos bate recorde de endividamento',
    impacto: 'Demográfico'
  },
  {
    id: 4,
    tipo: 'Inadimplência',
    gravidade: 'alta',
    percentual: 29.8,
    descricao: 'Quase 1/3 das famílias não conseguem pagar contas',
    impacto: 'Social'
  }
];

// Dados do blog atualizados para 2025
export const blogData = [
  {
    id: 1,
    title: 'BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025',
    excerpt: 'Banco Central estuda regulamentação após explosão de 187% no uso da modalidade. Especialistas alertam para riscos sistêmicos.',
    date: '23 Set 2025',
    readTime: '4 min',
    category: 'Urgente',
    trend: '+187%'
  },
  {
    id: 2,
    title: 'São Paulo Bate Recorde: 85,4% das Famílias Endividadas',
    excerpt: 'Capital paulista supera média nacional e lidera ranking de endividamento. Cartões digitais são os principais vilões.',
    date: '22 Set 2025',
    readTime: '3 min',
    category: 'Regional',
    trend: '+2,1%'
  },
  {
    id: 3,
    title: 'Geração Z: Por Que 92% Estão Endividados Antes dos 25 Anos?',
    excerpt: 'Pesquisa exclusiva com 15 mil jovens revela os fatores por trás do endividamento precoce. Redes sociais no centro da discussão.',
    date: '21 Set 2025',
    readTime: '6 min',
    category: 'Comportamento',
    trend: '+8,4%'
  }
];

// Dicas atualizadas para 2025
export const tipsData = [
  {
    id: 'pix-parcelado-urgente',
    icon: '🚨',
    title: 'ALERTA PIX Parcelado',
    description: 'BC pode regulamentar a qualquer momento - proteja-se JÁ',
    statistic: '+187% em 2025 - Regulamentação iminente',
    urgency: 'EMERGENCIAL - Possível regulamentação em 30 dias'
  },
  {
    id: 'geracao-z-salvacao',
    icon: '💡',
    title: 'Salvação Geração Z',
    description: 'Estratégias urgentes para jovens com 92% de endividamento',
    statistic: '92% dos jovens estão endividados',
    urgency: 'CRÍTICO - Geração em colapso financeiro'
  },
  {
    id: 'selic-oportunidade',
    icon: '⚡',
    title: 'Selic 15,00% = OPORTUNIDADE ??',
    description: 'Veja o que dizem especialistas do mercado financeiro',
    statistic: 'Quando será a nova reunião do COPOM?',
    urgency: 'JANELA DE OPORTUNIDADE - Máximo 60 dias'
  }
];

// Dados de navegação
export const navigationData = [
  { href: '#dados', label: 'Dados' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#blog', label: 'Blog' },
  { href: '#sobre', label: 'Sobre' }
];
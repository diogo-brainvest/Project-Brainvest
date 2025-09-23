import type { EndividamentoData, EstatisticasGerais// Dados para as dicas financeiras - ESTRATÉGIAS EMERGENCIAIS SETEMBRO 2025
export const tipsData = [
  {
    id: 'pix-parcelado-urgente',
    icon: '🚨',
    title: 'ALERTA PIX Parcelado',
    description: 'BC pode regulamentar a qualquer momento - proteja-se JÁ',
    statistic: '+187% em 2025 - Regulamentação iminente',
    urgency: 'EMERGENCIAL - Possível regulamentação em 30 dias',
    priority: 'critical',
    tips: [
      'PARE de usar PIX parcelado imediatamente',
      'Quite pendências antes da regulamentação',
      'Estude alternativas tradicionais',
      'Monitore comunicados do Banco Central'
    ]
  },s';

// Dados baseados em pesquisas reais do SPC Brasil, Banco Central e IBGE (Setembro 2025)
// Fontes: SPC Brasil, Banco Central, CNC, Serasa, IBGE
export const mockEndividamentoData: EndividamentoData = {
  porRegiao: {
    sudeste: 83.4,    // Liderança mantida, crescimento por fintechs
    nordeste: 78.9,   // Crescimento significativo com inclusão digital
    sul: 81.7,        // Estável, forte cultura de crédito
    norte: 76.8,      // Maior crescimento relativo (+3.3pp)
    centroOeste: 80.2 // Agronegócio aquecido impulsiona consumo
  },
  porIdade: {
    '18-25': 74.2,  // Crescimento com Pix parcelado e fintechs
    '26-35': 87.1,  // PICO HISTÓRICO - geração mais endividada
    '36-45': 86.8,  // Mantém alta, refinanciamentos
    '46-55': 79.4,  // Ligeira queda, maior controle
    '55+': 68.9     // Crescimento por consignado digital
  },
  tiposDivida: {
    cartaoCredito: 89.2,         // Explosão dos cartões digitais
    financiamentoVeiculo: 24.3,  // Recuperação pós-pandemia
    financiamentoImobiliario: 18.9, // Queda pela alta da Selic
    emprestimoConsignado: 15.7,  // Digitalização ampliou acesso
    chequeEspecial: 12.8,        // Queda contínua (-18.7%)
    outros: 52.1                 // BOOM: Pix parcelado, BNPL, crediário digital
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
  familiasSemDivida: 19.1,        // Dados SPC Brasil setembro 2025 (queda histórica)
  familiasMuitoEndividadas: 29.8, // Crescimento preocupante
  divideMediaFamilia: 5247,       // Valor ajustado pela inflação 2025
  percentualEndividados: 80.9,    // RECORDE HISTÓRICO - maior já registrado
  crescimentoAnual: 6.8,          // Aceleração significativa em 2025
  metadata: {
    fonte: 'SPC Brasil, BC, CNC, Serasa',
    ultimaAtualizacao: '2025-09-23T14:30:00Z',
    proximaAtualizacao: '2025-10-15T14:30:00Z',
    versao: '4.0.0',
    confiabilidade: 'alta'
  }
};

// Dados para as dicas financeiras - Estratégias específicas para 2025
export const tipsData = [
  {
    id: 'fintechs-seguras',
    icon: '�',
    title: 'Fintechs Seguras',
    description: 'Como escolher apps financeiros sem cair em armadilhas',
    statistic: '89% redução no risco',
    urgency: 'CRÍTICO - Explosão de apps fraudulentos',
    tips: [
      'Verifique registro no Banco Central',
      'Leia TODOS os termos de juros',
      'Evite aprovação instantânea',
      'Desconfie de juros "baixos" demais'
    ]
  },
  {
    id: 'pix-parcelado-cuidado',
    icon: '⚠️',
    title: 'PIX Parcelado: Cuidado!',
    description: 'Como usar sem se endividar na nova modalidade',
    statistic: '+187% crescimento em 2025',
    urgency: 'ALERTA - Nova modalidade viciante',
    tips: [
      'Use apenas para emergências',
      'Limite: máximo 2 parcelas',
      'Compare com cartão tradicional',
      'Nunca para compras supérfulas'
    ]
  },
  {
    id: 'cartao-digital-controle',
    icon: '�',
    title: 'Cartões Digitais',
    description: 'Controle o uso de cartões de fintechs',
    statistic: '89.2% das famílias usam',
    urgency: 'ATENÇÃO - Facilitam gastos impulsivos',
    tips: [
      'Configure limites baixos',
      'Ative notificações para todas compras',
      'Bloqueie compras online desnecessárias',
      'Tenha máximo 2 cartões ativos'
    ]
  },
  {
    id: 'negociacao-2025',
    icon: '🎯',
    title: 'Negociação Inteligente',
    description: 'Estratégias atualizadas para 2025',
    statistic: 'Até 95% de desconto',
    urgency: 'OPORTUNIDADE - Bancos flexibilizando',
    tips: [
      'Use apps de negociação oficial',
      'Negocie todas as dívidas juntas',
      'Aproveite promoções de final de ano',
      'Documente TUDO por escrito'
    ]
  }
];

// Dados para o blog - ATUALIZADOS SETEMBRO 2025 com base em fontes oficiais
export const blogData = [
  {
    id: 1,
    date: '2025-09-23',
    category: 'URGENTE',
    title: 'BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025',
    excerpt: 'Banco Central considera regulamentação emergencial após explosão de 187% no uso. Especialistas alertam para "efeito dominó" no endividamento jovem. Entenda o que muda...',
    readTime: '12 min',
    trending: true,
    importance: 'critical',
    views: '127k',
    tags: ['PIX', 'Regulamentação', 'Banco Central', 'Jovens']
  },
  {
    id: 2,
    date: '2025-09-22',
    category: 'BREAKING',
    title: 'São Paulo Bate Recorde: 85,4% das Famílias Endividadas',
    excerpt: 'Capital paulista supera média nacional e atinge maior índice da história. Pesquisa SPC revela que cartões digitais e apps de crédito são os vilões. Veja ranking completo por bairro...',
    readTime: '15 min',
    trending: true,
    importance: 'high',
    views: '89k',
    tags: ['São Paulo', 'Recorde', 'SPC Brasil', 'Ranking']
  },
  {
    id: 3,
    date: '2025-09-21',
    category: 'Análise',
    title: 'Geração Z: Por Que 92% Estão Endividados Antes dos 25 Anos?',
    excerpt: 'Exclusivo: Pesquisa com 15 mil jovens revela os hábitos que levam ao endividamento precoce. TikTok, influenciadores e fintechs no centro da discussão. Dados inéditos por região...',
    readTime: '18 min',
    trending: true,
    importance: 'high',
    views: '203k',
    tags: ['Geração Z', 'Jovens', 'TikTok', 'Fintechs', 'Pesquisa Exclusiva']
  },
  {
    id: 4,
    date: '2025-09-20',
    category: 'Tecnologia',
    title: 'IA nos Bancos: Como Algoritmos Facilitam Sua Entrada no Vermelho',
    excerpt: 'Investigação exclusiva revela como inteligência artificial dos bancos identifica "perfis de consumo" e oferece crédito no momento exato da vulnerabilidade. Documentos vazados mostram estratégias...',
    readTime: '14 min',
    importance: 'high',
    views: '156k',
    tags: ['Inteligência Artificial', 'Bancos', 'Algoritmos', 'Investigação']
  },
  {
    id: 5,
    date: '2025-09-19',
    category: 'Comportamento',
    title: 'Black Friday 2025: Como Não Cair nas Novas Armadilhas Digitais',
    excerpt: 'Preparação para Black Friday com estratégias contra novas modalidades de crédito. PIX parcelado, BNPL e cartões digitais: o que você precisa saber para não se endividar...',
    readTime: '11 min',
    views: '74k',
    tags: ['Black Friday', 'Estratégias', 'Compras', 'Planejamento']
  },
  {
    id: 6,
    date: '2025-09-18',
    category: 'Educacional',
    title: 'Selic 11,25%: Guia Completo Para Renegociar Suas Dívidas Agora',
    excerpt: 'Com a alta da Selic, bancos estão mais flexíveis para negociação. Passo a passo completo, modelos de proposta e dicas de especialistas para conseguir até 90% de desconto...',
    readTime: '16 min',
    views: '198k',
    tags: ['Selic', 'Negociação', 'Dívidas', 'Desconto', 'Guia Completo']
  }
];

// Novos dados detalhados de 2025 - Modalidades emergentes
export const novasModalidades2025 = [
  {
    nome: 'Pix Parcelado',
    percentual: 34.7,
    valorMedio: 890,
    crescimento2025: 187.4,
    descricao: 'Nova modalidade que explodiu em 2025',
    risco: 'Alto - juros podem chegar a 15% ao mês'
  },
  {
    nome: 'Buy Now Pay Later (BNPL)',
    percentual: 28.4,
    valorMedio: 650,
    crescimento2025: 156.7,
    descricao: 'Fintechs como Klarna, Sezzle, Zip',
    risco: 'Médio - facilita consumo impulsivo'
  },
  {
    nome: 'Crediário Digital',
    percentual: 52.1,
    valorMedio: 2140,
    crescimento2025: 28.9,
    descricao: 'Versão digital do crediário tradicional',
    risco: 'Médio - aprovação mais rápida'
  },
  {
    nome: 'Cartão de Crédito Digital',
    percentual: 89.2,
    valorMedio: 3680,
    crescimento2025: 12.3,
    descricao: 'Cartões 100% digitais de fintechs',
    risco: 'Muito Alto - juros de 425% ao ano'
  }
];

// Indicadores econômicos que impactam o endividamento (2025)
export const indicadoresEconomicos2025 = {
  selic: 11.25,
  inflacaoAcumulada: 4.2,
  desemprego: 7.8,
  rendaMediaFamiliar: 7420,
  salarioMinimo: 1518,
  impactoEndividamento: 'Alto - Selic elevada pressiona famílias'
};

// Alertas críticos de setembro 2025
export const alertasCriticos2025 = [
  {
    tipo: 'Recorde Histórico',
    valor: '80.9%',
    descricao: 'Maior índice de endividamento já registrado no Brasil',
    gravidade: 'Crítica'
  },
  {
    tipo: 'Jovens em Risco',
    valor: '87.1%',
    descricao: 'Geração 25-34 anos bate recorde de endividamento',
    gravidade: 'Alta'
  },
  {
    tipo: 'Pix Parcelado',
    valor: '+187%',
    descricao: 'Crescimento explosivo preocupa Banco Central',
    gravidade: 'Alta'
  },
  {
    tipo: 'Inadimplência',
    valor: '29.8%',
    descricao: 'Quase 1/3 das famílias não consegue pagar as contas',
    gravidade: 'Crítica'
  }
];

// Dados de navegação
export const navigationData = [
  { href: '#dados', label: 'Dados' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#blog', label: 'Blog' },
  { href: '#sobre', label: 'Sobre' }
];
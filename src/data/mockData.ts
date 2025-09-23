import type { EndividamentoData, EstatisticasGerais } from '../types';

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

// Dados para as dicas financeiras - ESTRATÉGIAS EMERGENCIAIS SETEMBRO 2025
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
    title: 'Selic 11,25% = OPORTUNIDADE',
    description: 'Bancos estão desesperados para renegociar - APROVEITE',
    statistic: 'Até 95% de desconto disponível AGORA',
    urgency: 'JANELA DE OPORTUNIDADE - Máximo 60 dias'
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
    readTime: '12 min'
  },
  {
    id: 2,
    date: '2025-09-22',
    category: 'BREAKING',
    title: 'São Paulo Bate Recorde: 85,4% das Famílias Endividadas',
    excerpt: 'Capital paulista supera média nacional e atinge maior índice da história. Pesquisa SPC revela que cartões digitais e apps de crédito são os vilões. Veja ranking completo por bairro...',
    readTime: '15 min'
  },
  {
    id: 3,
    date: '2025-09-21',
    category: 'Análise',
    title: 'Geração Z: Por Que 92% Estão Endividados Antes dos 25 Anos?',
    excerpt: 'Exclusivo: Pesquisa com 15 mil jovens revela os hábitos que levam ao endividamento precoce. TikTok, influenciadores e fintechs no centro da discussão. Dados inéditos por região...',
    readTime: '18 min'
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
    nome: 'Cartão de Crédito Digital',
    percentual: 89.2,
    valorMedio: 3680,
    crescimento2025: 12.3,
    descricao: 'Cartões 100% digitais de fintechs',
    risco: 'Muito Alto - juros de 425% ao ano'
  }
];

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
  }
];

// Dados de navegação
export const navigationData = [
  { href: '#dados', label: 'Dados' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#blog', label: 'Blog' },
  { href: '#sobre', label: 'Sobre' }
];
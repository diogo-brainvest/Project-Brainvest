export interface EndividamentoData {
  porRegiao: RegionalData;
  porIdade: AgeData;
  tiposDivida: DebtTypeData;
  metadata: DataMetadata;
}

export interface RegionalData {
  sudeste: number;
  nordeste: number;
  sul: number;
  norte: number;
  centroOeste: number;
}

export interface AgeData {
  '18-25': number;
  '26-35': number;
  '36-45': number;
  '46-55': number;
  '55+': number;
}

export interface DebtTypeData {
  cartaoCredito: number;
  financiamentoVeiculo: number;
  financiamentoImobiliario: number;
  emprestimoConsignado: number;
  chequeEspecial: number;
  outros: number;
}

export interface EstatisticasGerais {
  familiasSemDivida: number;
  familiasMuitoEndividadas: number;
  divideMediaFamilia: number;
  percentualEndividados: number;
  crescimentoAnual: number;
  metadata: DataMetadata;
}

export interface DataMetadata {
  fonte: string;
  ultimaAtualizacao: string;
  proximaAtualizacao: string;
  versao: string;
  confiabilidade: 'alta' | 'media' | 'baixa';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  timestamp: string;
}

export interface ChartConfig {
  colors: string[];
  animation: boolean;
  responsive: boolean;
}

export interface DebtTypeConfig {
  key: keyof DebtTypeData;
  name: string;
  icon: string;
  color: string;
}
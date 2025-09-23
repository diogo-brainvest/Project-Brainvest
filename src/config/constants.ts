import type { DebtTypeConfig } from '../types';

export const API_ENDPOINTS = {
  BANCO_CENTRAL: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs',
  IBGE: 'https://servicodados.ibge.gov.br/api/v3/agregados',
  INTERNAL_API: process.env.REACT_APP_API_URL || '/api',
} as const;

export const DATA_SOURCES = {
  SPC: 'SPC Brasil',
  SERASA: 'SERASA Experian',
  BANCO_CENTRAL: 'Banco Central do Brasil',
  IBGE: 'Instituto Brasileiro de Geografia e Estatística',
} as const;

export const COLORS = {
  primary: '#1976d2',
  secondary: '#dc004e',
  success: '#388e3c',
  warning: '#f57c00',
  error: '#d32f2f',
  info: '#0288d1'
};

export const CHART_COLORS = [
  '#1976d2',
  '#dc004e',
  '#388e3c',
  '#f57c00',
  '#9c27b0',
  '#00796b',
  '#5d4037',
  '#616161'
];

export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutos
  MEDIUM: 30 * 60 * 1000, // 30 minutos
  LONG: 24 * 60 * 60 * 1000, // 24 horas
} as const;

export const DEBT_TYPE_CONFIG: DebtTypeConfig[] = [
  { key: 'cartaoCredito', name: 'Cartão de Crédito', icon: '💳', color: '#EF4444' },
  { key: 'financiamentoVeiculo', name: 'Financ. Veículo', icon: '🚗', color: '#3B82F6' },
  { key: 'chequeEspecial', name: 'Cheque Especial', icon: '🏦', color: '#F59E0B' },
  { key: 'financiamentoImobiliario', name: 'Financ. Imobiliário', icon: '🏠', color: '#10B981' },
  { key: 'emprestimoConsignado', name: 'Empréstimo Consignado', icon: '💼', color: '#8B5CF6' },
  { key: 'outros', name: 'Outros', icon: '📊', color: '#6B7280' },
];

export const REGIONAL_CONFIG = [
  { key: 'sudeste', name: 'Sudeste', color: '#3B82F6' },
  { key: 'sul', name: 'Sul', color: '#10B981' },
  { key: 'nordeste', name: 'Nordeste', color: '#F59E0B' },
  { key: 'centroOeste', name: 'Centro-Oeste', color: '#EF4444' },
  { key: 'norte', name: 'Norte', color: '#8B5CF6' },
];

export const AGE_CONFIG = [
  { key: '18-25', name: '18-25 anos', color: '#3B82F6' },
  { key: '26-35', name: '26-35 anos', color: '#10B981' },
  { key: '36-45', name: '36-45 anos', color: '#F59E0B' },
  { key: '46-55', name: '46-55 anos', color: '#EF4444' },
  { key: '55+', name: '55+ anos', color: '#8B5CF6' },
];
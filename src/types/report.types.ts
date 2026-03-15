export type ExcelWarningType =
  | 'FORMULA_DETECTED'
  | 'FORMULA_SUSPECTED_RANGE'
  | 'FORMULA_ERROR'
  | 'TOTAL_MISMATCH';

export interface ExcelWarning {
  type: ExcelWarningType;

  period: string;
  category: string;

  subtotalExcel?: number;
  subtotalCalculated?: number;
  difference?: number;

  formula?: string;
}

export interface ProcessExcelResponse {
  report: FinalReport;
  warnings: ExcelWarning[];
}

export interface ReportRecord {
  label: string;
  amount: number;
}

export interface ReportByType {
  total: number;
  records: ReportRecord[];
}

export interface FinalReport {
  periods: string[];
  types: string[];
  data: Record<string, Record<string, ReportByType>>;
}
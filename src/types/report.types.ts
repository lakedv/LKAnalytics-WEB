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
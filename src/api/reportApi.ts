import axios from 'axios';
import type {
  FinalReport,
  ProcessExcelResponse,
} from '../types/report.types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const uploadExcel = async (
  file: File,
): Promise<ProcessExcelResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await api.post<ProcessExcelResponse>(
    '/report/upload',
    formData,
  );

  return data;
};

export const getAllReports = async () => {
  const { data } = await api.get<FinalReport[]>('/report');
  return data;
};

export const getReportByPeriod = async (period: string) => {
  const { data } = await api.get<FinalReport>(`/report/${period}`);
  return data;
};

export const healthCheck = async () => {
  const { data } = await api.get('/report/health');
  return data;
};
import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import PeriodSelector from '../components/report/PeriodSelector';
import SummaryCards from '../components/report/SummaryCards';
import ReportChart from '../components/report/ReportChart';
import ReportTable from '../components/report/ReportTable';
import { getReportByPeriod } from '../api/reportApi';
import type { FinalReport } from '../types/report.types';

export default function DashboardPage() {
    const [report, setReport] = useState<FinalReport | null>(
        null,
    );
    const [selectedPeriod, setSelectedPeriod] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleSelect = async (period: string) => {
        if (!period) return;

        setSelectedPeriod(period);
        setLoading(true);

        try{
            const data = await getReportByPeriod(period);
            setReport(data);
        } catch {
            setReport(null);
        } finally {
            setLoading(false);
        }
    };


    return (
        <DashboardLayout>
            <PeriodSelector onSelect={handleSelect} />
            {loading && <p>Cargando reporte...</p>}

            {report && selectedPeriod && (
                <>
                    <SummaryCards
                        data={report.data[selectedPeriod]}
                    />
                    <ReportChart
                        data={report.data[selectedPeriod]}
                    />
                    <ReportTable
                        data={report.data[selectedPeriod]}
                    />
                </>
            )}
        </DashboardLayout>
    );
}

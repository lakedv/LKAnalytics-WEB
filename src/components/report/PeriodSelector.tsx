import { useEffect, useState } from 'react';
import { getAllReports } from '../../api/reportApi';

interface Props {
    onSelect: (period: string) => void;
}

export default function PeriodSelector({ onSelect }: Props) {
    const [periods, setPeriods] = useState<string[]>([]);

    useEffect(() => {
        const fetchReports = async () => {
            const reports = await getAllReports();
            if (reports.length) {
                setPeriods(reports[reports.length - 1].periods);
            }
        };
        fetchReports();
    }, []);

    return (
        <div className="mb-6">
            <label className="block mb-2 font-medium">
                Seleccionar Periodo
            </label>
            <select
            className="border p-2 rounded w-64"
            onChange={(e) => onSelect(e.target.value)}
            >
                <option value="">-- Seleccionar --</option>
                {periods.map((p) => (
                    <option key={p} value={p}>
                        {p}
                    </option>
                ))}
            </select>
        </div>
    );
}

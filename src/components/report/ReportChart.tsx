import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import type { ReportByType } from '../../types/report.types';

interface Props {
    data: Record<string, ReportByType>;
}

export default function ReportChart({ data }: Props){
    const chartData = Object.entries(data).map(
        ([type, value]) => ({
            type,
            total: value.total,
        }),
    );

    return (
        <div className="bg-white p-6 rounded shadow mb-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <XAxis dataKey="type"/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Total"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
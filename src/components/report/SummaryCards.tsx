import type { ReportByType } from '../../types/report.types';

interface Props {
    data: Record<string, ReportByType>;
}

export default function SummaryCards({ data }: Props) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(data).map(([type, value]) =>(
                <div
                    key={type}
                    className="bg-white p-4 rounded shadow"
                >
                    <h3 className="text-sm text-gray-500">{type}</h3>
                    <p className="text-xl font-bold">
                        ${value.total.toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}
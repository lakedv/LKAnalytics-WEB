import type { ReportByType } from '../../types/report.types';

interface Props {
    data: Record<string, ReportByType>;
}

export default function ReportTable({ data }: Props) {
    return (
        <div className="bg-white p-6 rounded shadow">
            {Object.entries(data).map(([type, value]) => (
                <div key={type} className="mb-6">
                    <h3 className="font-semibold mb-2">{type}</h3>

                    <table className="w-full border text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left">Detalle</th>
                                <th className="p-2 text-right">Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.records.map((record) => (
                                <tr key={record.label}>
                                    <td className="p-2">{record.label}</td>
                                    <td className="p-2 text-right">
                                        ${record.amount.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
            ))}
        </div>
    );
}

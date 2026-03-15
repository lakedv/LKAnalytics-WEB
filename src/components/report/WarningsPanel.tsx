import type { ExcelWarning } from '../../types/report.types';

interface Props {
  warnings: ExcelWarning[];
}

export default function WarningsPanel({ warnings }: Props) {
  if (!warnings || warnings.length === 0) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-6">
      <h2 className="text-lg font-semibold text-yellow-800 mb-3">
        ⚠ Warnings detectados en el Excel
      </h2>

      <ul className="space-y-2">
        {warnings.map((warning, index) => (
          <li
            key={index}
            className="bg-white border rounded p-3 text-sm"
          >
            <strong>{warning.type}</strong>

            <div>Periodo: {warning.period}</div>
            <div>Categoría: {warning.category}</div>

            {warning.difference !== undefined && (
              <div className="text-red-600">
                Diferencia detectada: {warning.difference.toLocaleString()}
              </div>
            )}

            {warning.formula && (
              <div className="text-gray-600">
                Fórmula: {warning.formula}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
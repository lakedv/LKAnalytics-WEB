import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { uploadExcel } from '../api/reportApi';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');

    const handleUpload = async () => {
        if (!file) return;

        try {
            await uploadExcel(file);
            setMessage('Archivo procesado correctamente');
        } catch {
            setMessage('Error al procesar el archivo');
        }
    };

    return (
        <DashboardLayout>
            <div className="bg-white p-6 rounded shadow -max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Importar Archivo</h2>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                <button
                    onClick={handleUpload}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                    Importar
                    </button>
                    {message && <p className="mt-4 text-sm">{message}</p>}
            </div>
        </DashboardLayout>
    );
}
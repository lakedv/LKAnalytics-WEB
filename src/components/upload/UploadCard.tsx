import { useState } from 'react';

interface UploadCardProps {
  onUpload: (file: File) => void;
  loading?: boolean;
}

export default function UploadCard({ onUpload, loading }: UploadCardProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    onUpload(selectedFile);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">
        Subir archivo Excel
      </h2>

      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        className="mb-4"
      />

      {selectedFile && (
        <div className="text-sm text-gray-600 mb-4">
          Archivo seleccionado: <strong>{selectedFile.name}</strong>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className={`px-4 py-2 rounded text-white ${
          loading
            ? 'bg-gray-400'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Procesando...' : 'Subir Excel'}
      </button>
    </div>
  );
}
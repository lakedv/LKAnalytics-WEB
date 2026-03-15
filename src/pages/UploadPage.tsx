import { useState } from "react";
import UploadCard from "../components/upload/UploadCard";
import WarningsPanel from "../components/report/WarningsPanel";
import ReportChart from "../components/report/ReportChart";
import ReportTable from "../components/report/ReportTable";
import { uploadExcel } from "../api/reportApi";

import type { FinalReport, ExcelWarning } from "../types/report.types";

export default function UploadPage() {

  const [report, setReport] = useState<FinalReport | null>(null);
  const [warnings, setWarnings] = useState<ExcelWarning[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file: File) => {
    setLoading(true);

    try {
      const result = await uploadExcel(file);

      setReport(result.report);
      setWarnings(result.warnings ?? []);
    } finally {
      setLoading(false);
    }
  };

  // 👇 EXTRAEMOS EL PERIODO ACTIVO
  const period = report?.periods?.[0];
  const periodData = period ? report?.data?.[period] : undefined;

  return (
    <div className="p-6 space-y-6">

      <UploadCard onUpload={handleUpload} loading={loading} />

      <WarningsPanel warnings={warnings} />

      {periodData && (
        <>
          <ReportChart data={periodData} />
          <ReportTable data={periodData} />
        </>
      )}

    </div>
  );
}
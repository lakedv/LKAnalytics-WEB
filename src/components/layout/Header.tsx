import { useEffect, useState } from 'react';
import { healthCheck } from '../../api/reportApi';

export default function Header() {
    const [status, setStatus] = useState('Checking...');

    useEffect(() => {
        healthCheck()
            .then(() => setStatus('Backend is healthy'))
            .catch(() => setStatus('Backend is unhealthy'));
    }, []);

    return (
        <header className="bg-white shadow p-4 flex justify-between">
            <h1 className="text-lg font-semibold">LKAnalytics</h1>
            <span className="text-sm">{status}</span>
        </header>
    );
}

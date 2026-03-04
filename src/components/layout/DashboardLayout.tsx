import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface Props {
    children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
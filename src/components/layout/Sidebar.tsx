import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-whit shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Report Dashboard</h2>

            <nav className="flex flex-col gap-4">
                <Link to="/" className="hover:text-blue-500">
                Dashboard
                </Link>
                <Link to="/upload" className="hover:text-blue-500">
                Upload Excel
                </Link>
            </nav>
        </aside>
    );
}

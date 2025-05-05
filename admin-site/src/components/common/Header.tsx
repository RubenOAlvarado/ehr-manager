import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        <nav className="space-x-6">
          <Link to="/clients" className="hover:text-blue-700">Clients</Link>
          <Link to="/question-sets" className="hover:text-blue-700">Question Sets</Link>
          <Link to="/base-questions" className="hover:text-blue-700">Base Questions</Link>
          <Link to="/ehr-providers" className="hover:text-blue-700">EHR Providers</Link>
          <Link to="/ehr-mappings" className="hover:text-blue-700">EHR Mappings</Link>
        </nav>
      </div>
    </header>
  );
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClients } from '../../services/api/api';

export default function ClientForm() {
  const [name, setName] = useState('');
  const [externalId, setExternalId] = useState('');
  const [defaultLanguage, setDefaultLanguage] = useState('en');
  const [error, setError] = useState<string|null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createClients({ name, externalId, defaultLanguage });
      navigate('/clients');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || 'An unknown error occurred');
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register Client</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring"
            required
          />
        </div>
        <div>
          <label className="block font-medium">External ID</label>
          <input
            type="text"
            value={externalId}
            onChange={e => setExternalId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring"
          />
        </div>
        <div>
          <label className="block font-medium">Default Language</label>
          <select
            value={defaultLanguage}
            onChange={e => setDefaultLanguage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Save Client
        </button>
      </form>
    </div>
  );
}
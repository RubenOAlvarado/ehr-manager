import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientForm from '../components/common/ClientForm';
import { fetchClients } from '../services/api/api';
import { Client } from '../types/Clients';

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await fetchClients();
      setClients(data);
    })();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Clients</h1>
        <button
          onClick={() => setShowForm(prev => !prev)}
          className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          {showForm ? 'Close Form' : 'New Client'}
        </button>
      </div>

      {showForm && <ClientForm />}

      <ul className="mt-6 space-y-2">
        {clients.map(c => (
          <li key={c.id} className="p-4 bg-white rounded-lg shadow">
            <Link to={`/clients/${c.id}/providers`} className="text-blue-600 hover:underline">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
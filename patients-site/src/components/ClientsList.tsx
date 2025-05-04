import { useState, useEffect } from 'react';
import { getClientsList } from '../services/clients.service';
import { Client } from '../types/Clients';

interface ClientsListProps {
  onClientSelect: (clientId: string) => void;
  selectedClientId?: string;
  label?: string;
  className?: string;
}

const ClientsList = ({ 
  onClientSelect, 
  selectedClientId = '', 
  label = 'Pick your client', 
  className = '' 
}: ClientsListProps) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await getClientsList();
        setClients(data);
        setError(null);
      } catch (err) {
        setError('Failed to load clients');
        console.error('Error fetching clients:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onClientSelect(e.target.value);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor="client-select" className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {loading ? (
        <div className="animate-pulse h-10 bg-gray-200 rounded"></div>
      ) : error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : (
        <select
          id="client-select"
          value={selectedClientId}
          onChange={handleChange}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ClientsList;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EhrProvider } from '../../types/EhrProviders';
import { assingEhrProviderToClient, fetchClientEhrAssignedProviders, fetchEhrProviders } from '../../services/api/api';
import { EhrClientProvider } from '../../types/ClientEhrProvider';

export default function ClientEhrProvidersForm() {
  const { id: clientId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [providers, setProviders] = useState<EhrProvider[]>([]);
  const [selected, setSelected] = useState<EhrClientProvider[]>([]);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      const [{ data: all }, { data: assigned }] = await Promise.all([
        fetchEhrProviders(),
        fetchClientEhrAssignedProviders(clientId!),
      ]);
      setProviders(all);
      setSelected(assigned);
    })();
  }, [clientId]);

  const toggle = (provider: EhrProvider) => {
    setSelected(selected.some(s => s.ehrProviderCode === provider.code)
      ? selected.filter(s => s.ehrProviderCode !== provider.code)
      : [...selected, { ehrProviderCode: provider.code, isDefault: false }]
    );
  };

  const handleSubmit = async () => {
    try {
      await assingEhrProviderToClient(clientId!, selected);
      navigate('/clients');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Assign EHR Providers</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {providers.map(p => (
          <div key={p.code} className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selected.some(provider => provider.ehrProviderCode === p.code)}
                onChange={() => toggle(p)}
              />
              <span>{p.name}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="defaultProvider"
                checked={selected.some(provider => provider.ehrProviderCode === p.code && provider.isDefault)}
                onChange={() => {
                  setSelected(selected.map(s => ({
                    ...s
                  })));
                }}
                disabled={!selected.some(provider => provider.ehrProviderCode === p.code)}
              />
              <span className="text-sm text-gray-600">Default</span>
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Save Assignments
      </button>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface EhrProvider { code: string; name: string; }

export default function ClientEhrProvidersForm() {
  const { id: clientId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [providers, setProviders] = useState<EhrProvider[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      const [{ data: all }, { data: assigned }] = await Promise.all([
        // TODO: create this two api calls in services api
        api.get<EhrProvider[]>('/ehr-providers'),
        api.get<EhrProvider[]>(`/clients/${clientId}/ehr-providers`),
      ]);
      setProviders(all);
      setSelected(assigned.map(p => p.code));
    })();
  }, [clientId]);

  const toggle = (code: string) => {
    setSelected(prev => prev.includes(code)
      ? prev.filter(c => c !== code)
      : [...prev, code]
    );
  };

  const handleSubmit = async () => {
    try {
      await api.post(`/clients/${clientId}/ehr-providers`, { providers: selected });
      navigate('/clients');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Asignar Proveedores EHR</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {providers.map(p => (
          <label key={p.code} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(p.code)}
              onChange={() => toggle(p.code)}
            />
            <span>{p.name}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Guardar Asignaciones
      </button>
    </div>
  );
}
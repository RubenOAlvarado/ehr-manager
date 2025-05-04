import { useState } from "react";
import ClientsList from './ClientsList';

const Patients = () => {
    const [selectedClientId, setSelectedClientId] = useState<string | undefined>(undefined);
    const handleClientSelect = (clientId: string) => {
        setSelectedClientId(clientId);
    }
    
    return (
        <>
          {selectedClientId? (<></>) : <ClientsList onClientSelect={handleClientSelect} selectedClientId={selectedClientId} />}
        </>
    );
}

export default Patients;
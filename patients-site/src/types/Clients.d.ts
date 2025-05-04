export interface Client {
    id: string;
    name: string;
    externalId: string | null;
    preferredEhr: string;
    defaultLanguage: string;
    metadata: Record<string, unknown>;
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
}
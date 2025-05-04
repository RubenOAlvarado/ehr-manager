export interface Patient {
    id: string;
    clientId: string;
    externalId ?: string;
    basicInfo: Record<string, unknown>;
    preferredLanguage ?: string;
}
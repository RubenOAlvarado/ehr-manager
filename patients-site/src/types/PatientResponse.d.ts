export interface PatientResponse {
    id: string;
    patientId: string;
    baseQuestionId: string;
    response: string;
    responseMeta ?: Record<string, unknown>;
    sessionId ?: string;
}
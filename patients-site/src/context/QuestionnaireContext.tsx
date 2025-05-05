import { ReactNode, useState } from "react";
import { Client, Patient, PatientResponse, Question, QuestionnaireContextType } from "../types";
import { createPatient, submitResponses as apiSubmitResponses, fetchQuestions } from '../services/api';
import { QuestionnaireContext } from "./QuestionnareContextImpl";

export const QuestionnaireProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [patient, setPatientState] = useState<Patient | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Record<string, PatientResponse>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const setPatient = async (patientData: Patient) => {
    try {
      const createdPatient: Patient = await createPatient(patientData);
      setPatientState(createdPatient);
      
      if (createdPatient.clientId && createdPatient.preferredLanguage) {
        const fetchedQuestions = await fetchQuestions(
          createdPatient.clientId,
          createdPatient.preferredLanguage
        );
        setQuestions(fetchedQuestions);
      }
    } catch (error) {
      console.error('Error setting patient:', error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveResponse = (baseQuestionId: string, response: string, meta: Record<string, any> = {}) => {
    if (!patient) return;

    setResponses((prev) => ({
      ...prev,
      [baseQuestionId]: {
        patientId: patient.id!,
        baseQuestionId: baseQuestionId,
        response,
        responseMeta: meta,
      },
    }));
  };

  const submitResponses = async () => {
    if (!patient || Object.keys(responses).length === 0) return;

    setIsSubmitting(true);
    try {
      await apiSubmitResponses(Object.values(responses));
      setIsCompleted(true);
    } catch (error) {
      console.error('Error submitting responses:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const value: QuestionnaireContextType = {
    client,
    patient,
    questions,
    currentQuestionIndex,
    responses,
    setClient,
    setPatient,
    setQuestions,
    setCurrentQuestionIndex,
    saveResponse,
    submitResponses,
    isSubmitting,
    isCompleted,
  };

  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
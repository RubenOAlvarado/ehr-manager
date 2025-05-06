import axios from "axios";
import { Client, Patient, PatientResponse } from "../types";

const BASE_URL = "http://localhost:4000/api";
const API_VERSION = "v1";

export default axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: { "Content-Type": "application/json" },
});

const api = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: { "Content-Type": "application/json" },
});

export const fetchClients = async (): Promise<Client[]> => {
  try {
    const response = await api.get("/clients");
    return response.data;
  } catch (error) {
    console.error(`Error fetching clients: ${error}`);
    throw error;
  }
}

export const fetchLanguages = async () => {
  try {
    const response = await api.get("/languages");
    return response.data;
  } catch (error) {
    console.error(`Error fetching languages: ${error}`);
    throw error;
  }
}

export const fetchQuestions = async (clienId: string, languageCode: string) => {
  try {
    const response = await api.get(`/questions/${clienId}/${languageCode}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching questions: ${error}`);
    throw error;
  }
}

export const createPatient = async (patient: Patient) => {
  try {
    const response = await api.post(`/clients/${patient.clientId}/patients`, patient);
    return response.data;
  } catch (error) {
    console.error(`Error creating patient: ${error}`);
    throw error;
  }
}

export const submitResponses = async (patientId:string, responses: PatientResponse[]) => {
  try {
    const response = await api.post(`patients/${patientId}/patients-responses`, responses);
    return response.data;
  } catch (error) {
    console.error(`Error submitting responses: ${error}`);
    throw error;
  }
}
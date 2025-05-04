import api from "./api";

export async function getClientsList(){
    const response = await api.get('/clients');
    return response.data;
}
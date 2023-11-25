import { Paciente } from "../interfaces/Paciente";
import api from "./api";

export async function createPaciente(paciente: Paciente) {
  if (!paciente) {
    return null;
  }

  try {
    const resultado = await api.post("/paciente", paciente);
    console.log(resultado.data);
    return resultado.data;
  } catch (error) {
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    return null;
  }
}

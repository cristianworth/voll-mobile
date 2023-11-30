import api from "./api";

export async function agendarConsulta(
  especialistaId: string,
  pacienteId: string,
  data: Date
) {
  try {
    const resultado = await api.post("/consulta",
    {
      especialista: especialistaId,
      paciente: pacienteId,
      data: data,
    });

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

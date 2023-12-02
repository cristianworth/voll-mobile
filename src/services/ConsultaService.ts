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

export async function deleteConsulta(id: string)
{
  try {
    const resultado = await api.delete(`/consulta/${id}`)
    return resultado.data;
  } catch (error) {
    if (error.response) {
      console.error("Response data:", error.response.data.message);
    }
    return null;
  }
}
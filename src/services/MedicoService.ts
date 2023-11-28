import api from "./api";

export async function sarchEspecialistaByEstado(
  especialidade: string,
  estado: string
) {
  try {
    const resultado = await api.get("/especialista/busca", {
      params: { especialidade, estado },
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

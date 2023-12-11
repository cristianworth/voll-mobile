import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";

export async function doLogin(email: string, senha: string) {
  if (!email || !senha) return null;
  try {
    console.log('before api request')
    const resultado = await api.post("/auth/login", {
      email,
      senha,
    });

    console.log('resul api request', resultado)
    return resultado.data;
  } catch (error) {
    console.log('error return', error)
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    return null;
  }
}

export function storeLoginData(loginData: any) {
  const { token } = loginData;
  AsyncStorage.setItem("token", token);

  const pacienteId = decodeTokenId(token);
  AsyncStorage.setItem("pacienteId", pacienteId);
}

function decodeTokenId(token) {
  try {
    interface tokenPayload {
      id: string;
    }

    const tokenDecodificado = jwtDecode(token) as tokenPayload;
    console.log("Decoded Token:", tokenDecodificado);
    return tokenDecodificado.id;
  } catch (error) {
    console.error("Error decoding token:", error);
    return "2579d15f-f4f1-4a09-80dc-9797bfff3887";
  }
}

export function removeLoginDataFromStorage() {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("pacienteId");
}

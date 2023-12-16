import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export async function doLogin(email: string, senha: string) {
  if (!email || !senha) return null;
  try {
    const resultado = await api.post("/auth/login", {
      email,
      senha,
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

export function storeLoginData(loginData: any) {
  var { token } = loginData;
  
  AsyncStorage.setItem("token", token);
  console.log("Login token:", token);

  const pacienteId = decodeTokenId(token);
  AsyncStorage.setItem("pacienteId", pacienteId);
  console.log("Login pacienteId:", pacienteId);
}

function decodeTokenId(token: string) {
  try {
    interface TokenProps {
      id: string;
      role: string;
    }
  
    const decodedToken = jwtDecode(token) as TokenProps;
    console.log("jwt-decode:", decodedToken);

    return decodedToken.id;
  } catch (error) {
    console.error("Error decoding token:", error);
    // If fails return a default Id.
    const decodedId = "2579d15f-f4f1-4a09-80dc-9797bfff3887";
    return decodedId;
  }
}

export async function removeLoginDataFromStorage() {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("pacienteId");
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
import base64 from 'react-native-base64';
import crypto from 'crypto'

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
  var { token, userId } = loginData;
  
  AsyncStorage.setItem("token", token);
  console.log("Login token:", token);
  AsyncStorage.setItem("pacienteId", userId);
  console.log("Login pacienteId:", userId);

  // TODO: The method decodeTokenId it's not working, so I can't get the pacienteId from the token
  // const pacienteId = decodeTokenId(token);
  // AsyncStorage.setItem("pacienteId", pacienteId);
}

function decodeTokenId(token: string) {
  try {
    interface TokenProps {
      id: string;
      role: string;
    }
  
    // FIXME jsonwebtoken doesn't work, error log:
    // The package at "node_modules\jsonwebtoken\verify.js" attempted to import the Node standard library module "crypto".
    // It failed because the native React runtime does not include the Node standard library.
    // const secretKey: string = process.env.SECRET || "qualquercoisa";
    // const decodedToken: TokenProps = jwt.verify(
    //   token,
    //   secretKey
    // ) as TokenProps;
    // console.log("jsonwebtoken:", decodedToken);

    // FIXME jwt-decode doesn't work, error log:
    // Error decoding token: [InvalidTokenError: Invalid token specified: invalid base64 for part #2 (Property 'atob' doesn't exist)]
    const decodedToken = jwtDecode(token) as TokenProps;
    console.log("jwt-decode:", decodedToken);

    return decodedToken.id;
  } catch (error) {
    console.error("Error decoding token:", error);
    const decodedId = "2579d15f-f4f1-4a09-80dc-9797bfff3887";
    return decodedId;
  }
}

export async function removeLoginDataFromStorage() {
  const token = await AsyncStorage.getItem("token");
  console.log("Logout token:", token);
  const pacienteId = await AsyncStorage.getItem("pacienteId");
  console.log("Logout pacienteId:", pacienteId);

  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("pacienteId");
}

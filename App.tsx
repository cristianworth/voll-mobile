import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "./src/estilos/temas";
import Rotas from "./src/rotas";
import { useEffect } from "react";
import api from "./src/services/api";

export default function App() {
  useEffect(() => {
    async function pegarDados() {
      const resultado = await api.get("/paciente");
      console.log("todos pacientes = ", resultado.data);
    }
    pegarDados();
  }, []);

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}

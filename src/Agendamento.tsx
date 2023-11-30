import { Input, VStack, useToast } from "native-base";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useEffect, useState } from "react";
import { Botao } from "./componentes/Botao";
import { agendarConsulta } from "./services/ConsultaService";
import { convertStringToDate } from "./utils/Conversions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Agendamento({ navigation, route }: any) {
  const [data, setData] = useState("");
  const toast = useToast();

  async function agendar() {
    const pacienteId = await AsyncStorage.getItem("pacienteId");
    const { especialistaId } = route.params;

    const resultado = await agendarConsulta(
      especialistaId,
      pacienteId,
      convertStringToDate(data)
    );

    if (resultado) {
      toast.show({
        title: "Consulta agendada com sucesso",
        backgroundColor: "green.500",
      });
      return navigation.goBack();
    }
    toast.show({
      title: "Erro ao agendar consulta",
      description: "Horário indisponível",
      backgroundColor: "red.500",
    });
  }

  return (
    <VStack flex={1} justifyContent={"center"} padding={5}>
      <EntradaTexto
        label="Informe uma data para agendamento"
        placeholder="ex: 30/11/2023 08:00"
        value={data}
        onChangeText={setData}
      ></EntradaTexto>
      <Botao onPress={() => agendar()}>Agendar</Botao>
    </VStack>
  );
}

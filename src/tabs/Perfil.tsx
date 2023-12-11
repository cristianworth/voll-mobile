import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { getPacienteById } from "../services/PacienteService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Botao } from "../componentes/Botao";
import { removeLoginDataFromStorage } from "../services/AuthService";
import { Paciente } from "../interfaces/Paciente";

export default function Perfil({ navigation }: any) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function getPacienteData() {
      const token = await AsyncStorage.getItem("token");
      console.log("token = ", token);

      const pacienteId = await AsyncStorage.getItem("pacienteId");
      console.log("pacienteId = ", pacienteId);

      if (!pacienteId) {
        return null;
      }

      const retornoDadosPaciente = await getPacienteById(pacienteId);
      if (retornoDadosPaciente) {
        setDadosPaciente(retornoDadosPaciente);
      }
    }
    getPacienteData();
  }, []);

  function logout() {
    removeLoginDataFromStorage();
    navigation.replace("Login");
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} padding={5}>
        <Titulo color={"blue.500"}>Meu perfil</Titulo>
        <Avatar
          size={"xl"}
          source={{ uri: "https://github.com/cristianworth.png" }}
          mt={5}
        ></Avatar>

        <Titulo color={"blue.500"}>Informações pessoais</Titulo>
        <Titulo fontSize={"lg"} marginBottom={1}>
          {dadosPaciente?.nome}
        </Titulo>
        <Text>{dadosPaciente?.email}</Text>
        <Text>{dadosPaciente?.endereco?.estado}</Text>
        <Divider marginTop={5} />

        <Titulo color={"blue.500"}>Planos de Saúde</Titulo>
        {dadosPaciente?.planosSaude?.map((plano, index) => {
          return <Text key={index}>{plano}</Text>;
        })}
        <Botao onPress={() => logout()}>Deslogar</Botao>
      </VStack>
    </ScrollView>
  );
}

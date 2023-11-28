import { Box, FormControl, Image, ScrollView, VStack } from "native-base";
import { Titulo } from "./Titulo";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";
import { sarchEspecialistaByEstado } from "../services/MedicoService";
import { useState } from "react";
import CardConsulta from "./CardConsulta";
import { Medico } from "../interfaces/Medico";

export function BuscaMedicos() {
  const [especialidade, setEspecialidade] = useState("");
  const [estado, setEstado] = useState("");
  const [listMedicos, setListMedicos] = useState([]);

  async function searchEspecialista() {
    if (!especialidade && !estado) return null;

    var resultado = await sarchEspecialistaByEstado(especialidade, estado);
    if (resultado) {
      setListMedicos(resultado);
    }
  }
  return (
    <ScrollView padding={5} marginBottom={5}>
      <Box w={"100%"} bg={"white"} p="5" borderRadius={"lg"} shadow={"1"}>
        <EntradaTexto
          placeholder="Digite a especialidade"
          value={especialidade}
          onChangeText={setEspecialidade}
        ></EntradaTexto>
        <EntradaTexto
          placeholder="Digite sua localização"
          value={estado}
          onChangeText={setEstado}
        ></EntradaTexto>
        <Botao onPress={() => searchEspecialista()}>Buscar</Botao>
      </Box>
      <Box>
        <Titulo marginBottom={5} color={"blue.500"}>
          {listMedicos.length > 0
            ? "Resultados da busca"
            : "Nenhum resultado encontrado"}
        </Titulo>
        {listMedicos?.map((medico: Medico, index) => (
          <CardConsulta
            key={index}
            justifyContent={"center"}
            avatar={medico.imagem}
            nome={medico.nome}
            especialidade={medico.especialidade}
            foiAgendado
          ></CardConsulta>
        ))}
      </Box>
    </ScrollView>
  );
}

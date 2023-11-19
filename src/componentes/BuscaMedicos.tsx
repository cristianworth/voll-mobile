import { Box, FormControl, Image, VStack } from "native-base";
import { Titulo } from "./Titulo";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

function buscarConsultas() {
  return "";
}

export function BuscaMedicos() {
  return (
    <Box w={"100%"} bg={"white"} p="5" borderRadius={"lg"} shadow={"1"}>
      <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
      <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
      <Botao onPress={() => buscarConsultas()}>Buscar</Botao>
    </Box>
  );
}

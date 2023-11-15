import { TouchableOpacity } from "react-native";
import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
  Checkbox,
  ScrollView,
  Center,
} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useState } from "react";
import { secoes } from "./utils/CadastroEntradaDeTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  return (
    <ScrollView flex={1} padding={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={"center"} />
      <Titulo color={"gray.500"}>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradasDeTexto.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            ></EntradaTexto>
          );
        })}
      </Box>
      <Box>
        <Text
          color={"blue.800"}
          fontWeight={"bold"}
          fontSize={"md"}
          marginTop={2}
          marginBottom={2}
        >
          Selecione os planos:
        </Text>
        {secoes[numSecao].checkboxes.map((box) => {
          return (
            <Checkbox value={box.descricao} key={box.id}>
              {box.descricao}
            </Checkbox>
          );
        })}
      </Box>
      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bgColor={"gray.400"}>
          Voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSecao()} marginTop={4} marginBottom={20}>
        Avançar
      </Botao>
    </ScrollView>
  );
}

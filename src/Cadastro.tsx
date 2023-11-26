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
  useToast,
} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useState } from "react";
import { secoes } from "./utils/CadastroEntradaDeTexto";
import { createPaciente } from "./services/PacienteService";

export default function Cadastro({ navigation }: any) {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]);
  const toast = useToast();

  function refreshData(id: string, valor: string) {
    setDados({ ...dados, [id]: valor });
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else {
      console.log("dados = ", dados);
      console.log("planos = ", planos);
      create();
    }
  }

  async function create() {
    const paciente = {
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      estaAtivo: true,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        complemento: dados.complemento,
        estado: dados.estado,
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem,
    };

    const resultado = await createPaciente(paciente);
    if (resultado) {
      toast.show({
        title: "CREATED SUCCESSFUL",
        background: "green.500",
      });
      navigation.replace("Login");
    } else {
      toast.show({
        title: "ERROR TO SAVE DATA",
        description: "INVALID DATA",
        background: "red.500",
      });
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
              secureTextEntry={entrada.secureTextEntry}
              value={dados[entrada.name]}
              onChangeText={(text) => refreshData(entrada.name, text)}
            ></EntradaTexto>
          );
        })}
      </Box>
      {numSecao == 2 && (
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
              <Checkbox
                value={box.descricao}
                key={box.id}
                onChange={() => {
                  setPlanos((planosAnteriores) => {
                    if (planosAnteriores.includes(box.id)) {
                      // checkbox foi desmarcada, retorna todos menos ele mesmo
                      return planosAnteriores.filter((id) => id !== box.id);
                    }
                    // checkbox foi marcado, retorna todos os anteriores mais o que foi marcado agora
                    return [...planosAnteriores, box.id];
                  });
                }}
                isChecked={planos.includes(box.id)}
              >
                {box.descricao}
              </Checkbox>
            );
          })}
        </Box>
      )}
      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bgColor={"gray.400"}>
          Voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSecao()} marginTop={4} marginBottom={20}>
        {numSecao == 2 ? "Finalizar" : "Avançar"}
      </Botao>
    </ScrollView>
  );
}

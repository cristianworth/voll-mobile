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
  useToast,
} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useEffect, useState } from "react";
import { doLogin } from "./services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function validateLogin() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.replace("Tabs");

        toast.show({
          title: "LOGIN SUCCESSFUL",
          background: "green.500",
        });
      }
      setCarregando(false);
    }
    validateLogin();
  }, []);

  async function login() {
    const resultado = await doLogin(email, senha);
    if (resultado) {
      const { token } = resultado;
      AsyncStorage.setItem("token", token);

      const tokenDecodificado = jwtDecode(token) as any;
      const pacienteId = tokenDecodificado.id;
      AsyncStorage.setItem("pacienteId", pacienteId);
    } else {
      toast.show({
        title: "LOGIN INCORRECT",
        description: "EMAIL OR PASSWORD INVALID",
        background: "red.500",
      });
    }
  }

  if (carregando) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent={"center"} padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo color={"gray.500"}>Faça seu login</Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de email"
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </Box>
      <Botao onPress={login} marginTop={5}>
        Entrar
      </Botao>
      <Link
        marginTop={3}
        href="https://cursos.alura.com.br/course/react-native-typescript-app-consultas-medicas/task/125538"
      >
        Esqueceu a sua senha?
      </Link>
      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"}>
        <Text>Ainda não tem cadastro ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color={"blue.500"}>Faça o seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

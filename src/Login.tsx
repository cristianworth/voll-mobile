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
} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { useState } from "react";
import { doLogin } from "./services/AuthService";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function login() {
    const resultado = await doLogin(email, senha);
    if (resultado) {
      navigation.replace("Tabs");
      console.log("LOGIN SUCCESSFUL");
    } else {
      console.log("EMAIL OR PASSWORD INVALID");
    }
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

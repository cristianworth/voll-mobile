import { TouchableOpacity } from "react-native";
import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "./assets/Logo.png";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent={"center"} padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text fontSize="2xl" fontWeight={"bold"} color={"gray.500"} textAlign={"center"} marginTop={5}>Faça seu Login</Text>
      <Box>
        <FormControl marginTop={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Insira seu endereço de email" size={"lg"} w={"100%"} borderRadius={'lg'} bgColor={"gray.100"} shadow={3}></Input>
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder="Insira sua senha" size={"lg"} w={"100%"} borderRadius={'lg'} bgColor={"gray.100"} shadow={3}></Input>
        </FormControl>
      </Box>
      <Button w={100} bg={"blue.800"} marginTop={10} borderRadius={"lg"}>Entrar</Button>
      <Link href='https://cursos.alura.com.br/course/react-native-typescript-app-consultas-medicas/task/125538'>Esqueceu a sua senha?</Link>
      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"}>
        <Text>Ainda não tem cadastro ?</Text>
        <TouchableOpacity>
          <Text color={"blue.500"}>Faça o seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

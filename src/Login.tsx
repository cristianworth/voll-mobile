import { VStack, Image, Text, Box, FormControl, Input } from "native-base";
import Logo from "./assets/Logo.png";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" padding={5}>
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
    </VStack>
  );
}

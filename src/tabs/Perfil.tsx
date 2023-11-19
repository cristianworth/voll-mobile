import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} padding={5}>
        <Titulo color={"blue.500"}>Meu perfil</Titulo>
        <Avatar size={"xl"} source={{ uri: "https://github.com/cristianworth.png" }} mt={5}></Avatar>

        <Titulo color={"blue.500"}>Informações pessoas</Titulo>
        <Titulo fontSize={"lg"} marginBottom={1}>Cristian Weissmantel</Titulo>
        <Text>11/04/1999</Text>
        <Text>Rio Grande do Sul</Text>
        <Divider marginTop={5}/>

        <Titulo color={"blue.500"}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>

  );
}

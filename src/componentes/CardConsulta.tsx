import { Avatar, Box, ITextProps, Stack, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps extends ITextProps {
  avatar: string;
  nome: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export default function CardConsulta({
  avatar,
  nome,
  especialidade,
  data,
  foiAtendido = false,
  foiAgendado = false,
  ...rest
}: CardProps) {
  return (
    <VStack marginBottom={5} w={"100%"} bg={foiAtendido ? "blue.100" : "white"} p="5" borderRadius={"lg"} shadow={"2"}>
      <Box alignItems={"center"} {...rest} flexDir={"row"}>
        <Avatar size={"lg"} source={{ uri: avatar }} />
        <Stack paddingLeft={"4"}>
          <Text fontSize={"md"} bold>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          { data != null && <Text>{data}</Text> }
        </Stack>
      </Box>
      <Botao>{foiAgendado ? "Agendar consulta" : "Cancelar"}</Botao>
    </VStack>
  );
}

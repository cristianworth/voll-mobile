import { Divider, FormControl, ITextProps, Text, VStack } from "native-base";

interface DepoimentoProps extends ITextProps {
  descricaoDepoimento: string;
  nomeDepoimento: string;
}

export default function Depoimento({
  descricaoDepoimento,
  nomeDepoimento,
}: DepoimentoProps) {
  return (
    <FormControl>
      <VStack padding={5}>
        <Text color={"gray.500"}>
          {descricaoDepoimento}
        </Text>
        <Text
          marginTop={3}
          textAlign={"center"}
          color={"gray.600"}
          fontWeight={"bold"}
        >
          {nomeDepoimento}
        </Text>
      </VStack>
      <Divider/>
    </FormControl>
  );
}

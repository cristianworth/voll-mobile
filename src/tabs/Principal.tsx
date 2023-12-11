import {
  Button,
  Divider,
  FormControl,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Logo from "../assets/Logo.png";
import { Titulo } from "../componentes/Titulo";
import Depoimento from "../componentes/Depoimento";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { BuscaMedicos } from "../componentes/BuscaMedicos";
import { depoimentos } from "../utils/MockData";

export default function Principal({ navigation, route }: any) {
  return (
    <ScrollView flex={1}>
      <VStack flex={1}>
        <FormControl padding={5}>
          <Image source={Logo} alt="Logo Voll" />
          <Titulo marginBottom={5} alignSelf={"flex-start"} color={"blue.500"}>
            Boas-vindas!
          </Titulo>
          <BuscaMedicos navigation={navigation} route={route} />
        </FormControl>

        <Titulo color={"blue.900"}>Depoimentos</Titulo>
        {depoimentos.map((depoimento) => {
          return (
            <Depoimento
              key={depoimento.id}
              descricaoDepoimento={depoimento.descricao}
              nomeDepoimento={depoimento.nome}
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
}

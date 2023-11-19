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

const depoimentos = [
  {
    descricao:
      "Scott Pilgrim - 1 Pra quem achou que finalmente teríamos uma adaptação fiel às HQs de Scott Pilgrim, sinto que errou, o anime parece até menos fiel que o filme. Capturaram perfeitamente a vibe das HQs na animação, é criativo, estiloso, engraçado e dinâmico. Estou gostando.",
    nome: "Hikki, 40 anos, São Paulo/SP.",
  },
  {
    descricao:
      "No final do primeiro episódio fiquei ??????? Eu jurava que o Scott vencia e fui até ler a HQ dnv pra conferir, mas até aí de boa, começa o episódio 2 e tá tudo diferente, foi aí que me toquei que seria completamente diferente da HQ",
    nome: "Plopati, 40 anos, São Paulo/SP.",
  },
  {
    descricao:
      "É legal, mas é muito fraco comparado ao material original, nn entrarei em detalhes pq vc ainda está assistindo, mas  eu nn recomendaria para alguém que vai conhecer a obra",
    nome: "Buruno, 40 anos, São Paulo/SP.",
  },
  {
    descricao:
      "É legal, mas é muito fraco comparado ao material original, nn entrarei em detalhes pq vc ainda está assistindo, mas  eu nn recomendaria para alguém que vai conhecer a obra",
    nome: "Buruno, 40 anos, São Paulo/SP.",
  },
];

function buscarConsultas() {
  return "";
}

export default function Principal() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1}>
        <FormControl padding={5}>
          <Image source={Logo} alt="Logo Voll" />
          <Titulo marginBottom={5} alignSelf={"flex-start"} color={"blue.500"}>
            Boas-vindas!
          </Titulo>
          <BuscaMedicos/>
        </FormControl>

        <Titulo color={"blue.900"}>
          Depoimentos
        </Titulo>
        {depoimentos.map((depoimento) => {
          return (
            <Depoimento
              descricaoDepoimento={depoimento.descricao}
              nomeDepoimento={depoimento.nome}
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
}

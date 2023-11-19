import { Divider, ScrollView, Text, VStack } from "native-base";
import CardConsulta from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas() {
  return (
    <ScrollView padding={5}>
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>
      <Botao autoSize>Agendar outra consulta</Botao>

      <Titulo marginTop={10} color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>Próximas consultas</Titulo>
      <CardConsulta avatar="https://github.com/cristianworth.png" nome="Dr. Cristian Worth" especialidade="Cardiologista" data="03/04/2023"></CardConsulta>
      
      <Divider/>

      <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>Consultas passadas</Titulo>
      <CardConsulta avatar="https://github.com/andreocunha.png" nome="Dr. André Cunha" especialidade="Cardiologista" data="03/03/2023" foiAtendido foiAgendado></CardConsulta>
      <CardConsulta avatar="https://github.com/andreocunha.png" nome="Dr. André Cunha" especialidade="Cardiologista" data="03/02/2023" foiAtendido foiAgendado></CardConsulta>
      <CardConsulta avatar="https://github.com/andreocunha.png" nome="Dr. André Cunha" especialidade="Cardiologista" data="03/01/2023" foiAtendido foiAgendado></CardConsulta>
    </ScrollView>
  );
}

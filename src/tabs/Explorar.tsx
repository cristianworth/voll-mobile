import { ScrollView, Text, VStack } from "native-base";
import { BuscaMedicos } from "../componentes/BuscaMedicos";
import { Titulo } from "../componentes/Titulo";
import CardConsulta from "../componentes/CardConsulta";

export default function Explorar() {
  return (
    <ScrollView padding={5} marginBottom={5}>
      <BuscaMedicos></BuscaMedicos>
      <Titulo marginBottom={5} color={"blue.500"}>Resultados da busca</Titulo>
      {[1,2,3].map((_, index) => (
        <CardConsulta key={index} justifyContent={"center"} avatar="https://github.com/andreocunha.png" nome="Dr. André Cunha" especialidade="Cardiologista" foiAgendado></CardConsulta>
      ))}
    </ScrollView>
  );
}

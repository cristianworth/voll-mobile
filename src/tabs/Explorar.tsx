import { ScrollView, Text, VStack } from "native-base";
import { BuscaMedicos } from "../componentes/BuscaMedicos";
import { Titulo } from "../componentes/Titulo";
import CardConsulta from "../componentes/CardConsulta";

export default function Explorar({ navigation, route }: any) {
  return <BuscaMedicos navigation={navigation} route={route}></BuscaMedicos>;
}

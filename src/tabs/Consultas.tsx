import { Divider, ScrollView, Text, VStack, useToast } from "native-base";
import CardConsulta from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getConsultarFromPaciente } from "../services/PacienteService";
import { useEffect, useState } from "react";
import { convertDateToString } from "../utils/Conversions";
import { NavigationProps } from "../@types/navigation";
import { deleteConsulta } from "../services/ConsultaService";
import { useIsFocused } from "@react-navigation/native";

export default function Consultas({
  navigation,
}: NavigationProps<"Consultas">) {
  const toast = useToast();
  const [recarregar, setRecarregar] = useState(false);
  const isFocused = useIsFocused();
  const [upcomingAppointments, setUpcomingAppointments] = useState<Consulta[]>(
    []
  );
  const [historicalAppointments, setHistoricalAppointments] = useState<
    Consulta[]
  >([]);

  async function loadConsultas() {
    const pacienteId = await AsyncStorage.getItem("pacienteId");
    if (!pacienteId) return null;

    const consultasFromPaciente: Consulta[] = await getConsultarFromPaciente(
      pacienteId
    );

    if (consultasFromPaciente) {
      setUpcomingAppointments(
        consultasFromPaciente.filter(
          (consulta) => new Date(consulta.data) > new Date()
        )
      );
      setHistoricalAppointments(
        consultasFromPaciente.filter(
          (consulta) => new Date(consulta.data) <= new Date()
        )
      );
    } else {
    }
  }

  useEffect(() => {
    loadConsultas();
  }, [isFocused, recarregar]);

  async function cancelarConsulta(idConsulta) {
    if (!idConsulta) return null;

    var resultado = await deleteConsulta(idConsulta);
    if (resultado) {
      toast.show({
        title: "Consulta cancelada com sucesso",
        backgroundColor: "green.500",
      });
      setRecarregar(!recarregar);
    } else {
      toast.show({
        title: "Erro ao cancelar consulta",
        description: "Consulta não pode ser cancelada.",
        backgroundColor: "red.500",
      });
    }
  }

  function agendarConsulta(especialistaId) {
    navigation.navigate("Agendamento", { especialistaId: especialistaId });
  }

  return (
    <ScrollView padding={5}>
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>
      <Botao autoSize onPress={() => loadConsultas()}>
        Agendar outra consulta (refresh)
      </Botao>

      <Titulo
        marginTop={10}
        color={"blue.500"}
        fontSize={"lg"}
        alignSelf={"flex-start"}
        mb={2}
      >
        Próximas consultas
      </Titulo>
      {upcomingAppointments?.map((appointment, index) => (
        <CardConsulta
          key={appointment.id}
          avatar={appointment.especialista.imagem}
          nome={appointment.especialista.nome}
          especialidade={appointment.especialista.especialidade}
          data={convertDateToString(appointment.data)}
          onPress={() => cancelarConsulta(appointment.id)}
        ></CardConsulta>
      ))}
      <Divider />

      <Titulo
        color={"blue.500"}
        fontSize={"lg"}
        alignSelf={"flex-start"}
        mb={2}
      >
        Consultas passadas
      </Titulo>
      {historicalAppointments?.map((appointment, index) => (
        <CardConsulta
          key={appointment.id}
          avatar={appointment.especialista.imagem}
          nome={appointment.especialista.nome}
          especialidade={appointment.especialista.especialidade}
          data={convertDateToString(appointment.data)}
          foiAtendido
          foiAgendado
          onPress={() => agendarConsulta(appointment.especialista.id)}
        ></CardConsulta>
      ))}
    </ScrollView>
  );
}

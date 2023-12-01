import { Divider, ScrollView, Text, VStack } from "native-base";
import CardConsulta from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getConsultarFromPaciente } from "../services/PacienteService";
import { useEffect, useState } from "react";
import { convertDateToString } from "../utils/Conversions";

export default function Consultas() {
  const [upcomingAppointments, setUpcomingAppointments] = useState<Consulta[]>(
    []
  );
  const [historicalAppointments, setHistoricalAppointments] = useState<
    Consulta[]
  >([]);

  useEffect(() => {
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
    loadConsultas();
  }, []);

  return (
    <ScrollView padding={5}>
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>
      <Botao autoSize>Agendar outra consulta</Botao>

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
        ></CardConsulta>
      ))}
    </ScrollView>
  );
}

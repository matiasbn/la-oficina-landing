import React from "react";
import "./Calendario.css";

const calendarioData = [
  {
    dia: "16-10-2024",
    hora: "20:00",
    actividad: "Entrevista DKSTLE",
    instagram: "https://www.instagram.com/dkstle",
  },
  {
    dia: "18-10-2024",
    hora: "20:00",
    actividad: "Entrevista POR CONFIRMAR",
    instagram: "",
  },
  {
    dia: "20-10-2024",
    hora: "20:00",
    actividad: "Entrada a $5.000",
    instagram: "https://www.laoficina.cl",
  },
  {
    dia: "21-10-2024",
    hora: "20:00",
    actividad: "Entrevista Stomp",
    instagram: "https://www.instagram.com/stomplex/",
  },
  {
    dia: "23-10-2024",
    hora: "20:00",
    actividad: "Entrevista Zaulo",
    instagram: "https://www.instagram.com/zaulo_/",
  },
  {
    dia: "25-10-2024",
    hora: "20:00",
    actividad: "Entrevista POR CONFIRMAR",
    instagram: "",
  },
  {
    dia: "27-10-2024",
    hora: "20:00",
    actividad: "Entrada a $7.000",
    instagram: "https://www.laoficina.cl",
  },
  {
    dia: "30-10-2024",
    hora: "20:00",
    actividad: "Entrevista POR CONFIRMAR",
    instagram: "",
  },
  {
    dia: "01-11-2024",
    hora: "20:00",
    actividad: "Entrevista Monkeyman",
    instagram: "https://www.instagram.com/monkeyman",
  },
  {
    dia: "03-11-2024",
    hora: "20:00",
    actividad: "Entrada a $8.000",
    instagram: "https://www.laoficina.cl",
  },
  {
    dia: "06-11-2024",
    hora: "20:00",
    actividad: "Entrevista DJ Vass",
    instagram: "https://www.instagram.com/djvass",
  },
  {
    dia: "08-11-2024",
    hora: "20:00",
    actividad: "Entrevista Fluorescente & Aalan",
    instagram: "https://www.instagram.com/fluorescente",
  },
  {
    dia: "09-11-2024",
    hora: "23:00",
    actividad: "Concrete Jungle Vol 1",
    instagram: "https://www.instagram.com/laoficina.music",
  },
];

const Calendario = () => {
  return (
    <div className="container">
      <h1>Calendario de Actividades</h1>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>¿Qué?</th>
            <th>Perfil de Instagram</th>
          </tr>
        </thead>
        <tbody>
          {calendarioData.map((evento, index) => (
            <tr key={index}>
              <td>{evento.dia}</td>
              <td>{evento.hora}</td>
              <td>{evento.actividad}</td>
              <td>
                {evento.instagram ? (
                  <a
                    href={evento.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                ) : (
                  "No disponible"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendario;

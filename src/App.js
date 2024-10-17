import React from "react";
import "./App.css";
import logo from "./la_oficina.jpg"; // Using the local logo image

// Función para rastrear los eventos de clic y agregar un delay
const trackButtonClick = (label, url) => {
  // Enviar evento a Google Analytics
  window.gtag("event", "click", {
    event_category: "Button",
    event_label: label,
    value: 1,
  });

  // Agregar un retraso de 300 ms antes de redirigir al enlace
  setTimeout(() => {
    window.open(url, "_blank");
  }, 3000);
};

function App() {
  return (
    <div className="linktree-container">
      <img src={logo} alt="Logo" className="profile-image" />
      <p className="description-text">
        Impulsando lo mejor del <br />
        talento musical en Chile 🇨🇱
      </p>
      <div className="link-container">
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "Entradas Concrete Jungle Vol 1",
              "https://laoficina.evently.cl/concrete-jungle-vol-1"
            )
          }
        >
          Entradas Concrete Jungle Vol 1,
          <br />
          Fiesta de La Oficina
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "Calendario",
              "https://docs.google.com/spreadsheets/d/1UXMq8TsTPNdkqb6PV1JOFQkmWyhkEFXH5RSqP_sMlak/edit?gid=0#gid=0"
            )
          }
        >
          Calendario
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick("TikTok", "https://tiktok.com/@laoficina.music")
          }
        >
          Tik Tok
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "Instagram",
              "https://instagram.com/laoficina.music"
            )
          }
        >
          Instagram
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick("YouTube", "https://youtube.com/@laoficina_music")
          }
        >
          YouTube
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick("Twitch", "https://twitch.tv/laoficinamusic")
          }
        >
          Twitch
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "SoundCloud",
              "https://soundcloud.com/laoficina_music"
            )
          }
        >
          SoundCloud
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "Podcast",
              "https://podcasters.spotify.com/pod/show/la-oficina-music"
            )
          }
        >
          Otro día en La Oficina,
          <br />
          nuestro Podcast
        </a>
      </div>
    </div>
  );
}

export default App;

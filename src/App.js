import React from "react";
import "./App.css";
import logo from "./la_oficina.jpg"; // Using the local logo image

// Función para rastrear los eventos de clic
const trackButtonClick = (label) => {
  window.gtag("event", "click", {
    event_category: "Button",
    event_label: label,
    value: 1,
  });
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
          href="https://laoficina.evently.cl/concrete-jungle-vol-1"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("Entradas Concrete Jungle Vol 1")}
        >
          Entradas Concrete Jungle Vol 1,
          <br />
          Fiesta de La Oficina
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1UXMq8TsTPNdkqb6PV1JOFQkmWyhkEFXH5RSqP_sMlak/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("Calendario")}
        >
          Calendario
        </a>
        <a
          href="https://tiktok.com/@laoficina.music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("TikTok")}
        >
          Tik Tok
        </a>
        <a
          href="https://instagram.com/laoficina.music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("Instagram")}
        >
          Instagram
        </a>
        <a
          href="https://youtube.com/@laoficina_music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("YouTube")}
        >
          YouTube
        </a>
        <a
          href="https://twitch.tv/laoficinamusic"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("Twitch")}
        >
          Twitch
        </a>
        <a
          href="https://soundcloud.com/laoficina_music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("SoundCloud")}
        >
          SoundCloud
        </a>
        <a
          href="https://podcasters.spotify.com/pod/show/la-oficina-music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          onClick={() => trackButtonClick("Podcast")}
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

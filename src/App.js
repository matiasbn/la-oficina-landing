import React from "react";
import "./App.css";
import logo from "./la_oficina.jpg"; // Using the local logo image

// Función para rastrear los eventos de clic y agregar un delay
const trackButtonClick = (label, url) => {
  // Enviar evento a Google Analytics
  window.gtag("event", label, {
    event_category: "Click en link",
    event_label: label,
    value: url,
  });

  // Agregar un retraso de 300 ms antes de redirigir al enlace
  setTimeout(() => {
    window.open(url, "_blank");
  }, 300);
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
          className="link-button dark-button"
          onClick={() =>
            trackButtonClick(
              "StreamsYouTube",
              "https://www.youtube.com/@laoficina_music/streams"
            )
          }
        >
          Otro día en La Oficina
          <br />
          en YouTube Live
        </a>
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick("TikTok", "https://tiktok.com/@laoficina.music")
          }
        >
          TikTok
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
            trackButtonClick(
              "SoundCloud",
              "https://soundcloud.com/laoficina_music"
            )
          }
        >
          SoundCloud
        </a>
      </div>
    </div>
  );
}

export default App;

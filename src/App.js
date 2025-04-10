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
              "https://www.youtube.com/live/tOQ9k0f7Lr0"
            )
          }
        >
          Nahum Nieves, Capítulo 0
          <br />
          Formato nuevo (Youtube Live)
        </a>
        <a
          href="#"
          className="link-button"
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
          className="link-button font-bold"
          onClick={() =>
            trackButtonClick(
              "Formulario",
              "https://www.instagram.com/p/DB4bxJPywcZ/"
            )
          }
        >
          Postula a La Oficina
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
          Podcast en Spotify
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
        <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick(
              "Calendario",
              "https://teamup.com/ks9v1rtndmmhauqqme"
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
        {/* <a
          href="#"
          className="link-button"
          onClick={() =>
            trackButtonClick("Twitch", "https://twitch.tv/laoficinamusic")
          }
        >
          Twitch
        </a> */}
      </div>
    </div>
  );
}

export default App;

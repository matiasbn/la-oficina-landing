import React from "react";
import "./App.css";
import logo from "./la_oficina.jpg"; // Usando la imagen local del logo

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
        >
          Entradas Concrete Jungle Vol 1,
          <br />
          Fiesta de La Oficina
        </a>
        {/* Aquí se cambia el botón de Calendario para redirigir a la subpágina de calendario */}
        <a href="/calendario" className="link-button">
          Calendario
        </a>
        <a
          href="https://tiktok.com/@laoficina.music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Tik Tok
        </a>
        <a
          href="https://instagram.com/laoficina.music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com/@laoficina_music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          YouTube
        </a>
        <a
          href="https://twitch.tv/laoficinamusic"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          Twitch
        </a>
        <a
          href="https://soundcloud.com/laoficina_music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          SoundCloud
        </a>
        <a
          href="https://podcasters.spotify.com/pod/show/la-oficina-music"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
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

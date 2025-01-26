import React from "react";
import ReactDOM from "react-dom/client";
import TurismoSostenible from "./pages/TurismoSostenible";
import "./styles/style.css"; // Asegúrate de que esta ruta apunte a tu CSS con Tailwind

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <TurismoSostenible />
  </React.StrictMode>
);


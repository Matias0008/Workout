import Datos from "./components/Datos";
import Nav from "./components/Nav";
import Turnos from "./components/Turnos";
import Campeonato from "./components/Campeonato";

import { createContext, useState } from "react";
import Alumno from "./components/Alumno";

export const AppContext = createContext();

function App() {
  const [buscar, setBuscar] = useState(false);
  const [documento, setDocumento] = useState("");
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    categoria: "",
    email: "",
    nacimiento: "",
    tipoDoc: "Tipo documento",
    doc: "",
  });
  const [modo, setModo] = useState("academia");
  let titulo =
    modo == "academia"
      ? "Registrar inscripción a la Academia"
      : "Registrar inscripción a Campeonato";
  switch (modo) {
    case "academia":
      titulo = "Registrar inscripción a la Academia";
      break;
    case "campeonato":
      titulo = "Registrar inscripción a Campeonato";
      break;
    case "alumno":
      titulo = "Registrar alumno";
      break;
  }

  return (
    <>
      <AppContext.Provider
        value={{
          buscar,
          setBuscar,
          documento,
          setDocumento,
          datos,
          setDatos,
          modo,
          setModo,
        }}
      >
        <>
          <Nav />
          <div
            className="container-fluid d-flex flex-column"
            style={{
              paddingTop: "0.7rem",
              minHeight: "96vh",
              paddingLeft: "520px",
              paddingRight: "200px",
            }}
          >
            <div className="row">
              {modo != "alumno" && <Titulo titulo={titulo} />}
            </div>
            {modo != "alumno" && <Datos />}
            {modo != "alumno" && <Hr />}
            {modo == "academia" && <Turnos />}
            {modo == "campeonato" && <Campeonato />}
            {modo == "alumno" && <Alumno />}
          </div>
        </>
      </AppContext.Provider>
    </>
  );
}

export default App;

function Titulo({ titulo }) {
  return (
    <>
      <h1
        className="display-5"
        style={{
          textAlign: "start",
          fontWeight: "bold",
          padding: 0,
          margin: "3px",
        }}
      >
        {titulo}
      </h1>
      <h3
        style={{
          padding: 0,
          color: "#555",
          marginBottom: "30px",
        }}
      >
        15/11/2022 19:15
      </h3>
    </>
  );
}

function Hr() {
  return (
    <hr
      style={{
        marginTop: "1.5rem",
      }}
    ></hr>
  );
}

import React from "react";
import Logo from "../images/workout.png";
import { useContext } from "react";
import { AppContext } from "../App";

import "./Nav.css";

function Nav() {
  const {
    buscar,
    setBuscar,
    documento,
    setDocumento,
    datos,
    setDatos,
    modo,
    setModo,
  } = useContext(AppContext);
  let campeonato = modo == "campeonato" ? " active" : "";
  let inscripcion = modo == "academia" ? " active" : "";
  let alumno = modo == "alumno" ? " active" : "";
  return (
    <nav
      id="sidebarMenu"
      class="collapse sidebar collapse bg-white"
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <img
        src={Logo}
        alt="Logo workout"
        style={{
          width: "150px",
          height: "150px",
        }}
      />
      <h1
        style={{
          fontSize: "3.2rem",
          marginBottom: 0,
        }}
      >
        Workout
      </h1>
      <p
        style={{
          marginTop: "-5px",
        }}
      >
        Academia de calistenia
      </p>
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a
            class={
              "list-group-item list-group-item-action py-2 ripple" + inscripcion
            }
            onClick={() => {
              setModo("academia");
              setBuscar(false);
              setDatos({
                nombre: "",
                telefono: "",
                categoria: "",
                email: "",
                nacimiento: "",
                tipoDoc: "Tipo documento",
                doc: "",
              });
              setDocumento("");
            }}
          >
            <span>Registrar inscripción a la Academia</span>
          </a>
          <a
            class={
              "list-group-item list-group-item-action py-2 ripple" + campeonato
            }
            onClick={() => {
              setModo("campeonato");
              setBuscar(false);
              setDatos({
                nombre: "",
                telefono: "",
                categoria: "",
                email: "",
                nacimiento: "",
                tipoDoc: "Tipo documento",
                doc: "",
              });
              setDocumento("");
            }}
          >
            <span>Registrar Inscripción a Campeonato</span>
          </a>
          <a
            class={
              "list-group-item list-group-item-action py-2 ripple" + alumno
            }
            onClick={() => {
              setModo("alumno");
              setBuscar(false);
            }}
          >
            <span>Registrar alumno</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

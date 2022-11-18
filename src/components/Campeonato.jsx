import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Turnos() {
  let dias = [
    "30/11/2022",
    "04/12/2022",
    "05/01/2023",
    "31/02/2023",
    "18/12/2022",
    "31/12/2022",
  ];
  let nombres = [
    "Barmanija",
    "Gym WC",
    "Mr Olympia",
    "Arnold Classic",
    "King of the Bar",
    "SW Championship SA",
  ];
  let sedes = [
    "Gym X",
    "Soria",
    "Rosetti",
    "Gold Gym",
    "Planet Fitness",
    "Zona",
    "Impulso",
    "Fenix",
    "Sport Club",
  ];
  let niveles = [
    "Nacional",
    "Provincial",
    "Local",
    "Nacional",
    "Provincial",
    "Local",
  ];
  let precios = ["5000", "3000", "2000", "9000", "2000", "1500"];
  const [selected, setSelected] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [nombreCampeonato, setNombreCampeonato] = useState("");
  const [total, setTotal] = useState(0);
  const handleClick = (index) => {
    if (selected[index]) {
      setSelected({ ...selected, [index]: false });
      setNombreCampeonato("");
      setTotal(0);
    } else {
      setSelected({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        [index]: true,
      });
      setTotal(precios[index]);
      setNombreCampeonato(nombres[index]);
    }
  };

  let hoy = new Date();
  let ahora = "15/11/2022 19:15";
  const { buscar, datos } = useContext(AppContext);
  let titulo_disabled = !buscar ? "mb-4 disabled" : "mb-4";
  let titulo = buscar
    ? `Campeonatos disponibles: ${datos.categoria}`
    : "Campeonatos disponibles";
  let visible = buscar ? "" : "transparent";

  return (
    <>
      <div className="row">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            padding: 0,
          }}
        >
          <h1
            style={{
              padding: 0,
            }}
            className={titulo_disabled}
          >
            {titulo}
          </h1>
        </div>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th
                scope="col"
                style={{
                  width: "200px",
                }}
              >
                Nombre
              </th>
              <th scope="col">Sede</th>
              <th scope="col">Fecha</th>
              <th scope="col">Nivel</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {dias.map((dia, index) => {
              let elegido = dias[index];
              return (
                <tr>
                  <th scope="row">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        disabled={!buscar}
                        onClick={() => {
                          handleClick(index);
                        }}
                        checked={selected[index]}
                      />
                    </div>
                  </th>
                  <td className={visible}>{nombres[index]}</td>
                  <td className={visible}>{sedes[index]}</td>
                  <td className={visible}>{elegido}</td>
                  <td className={visible}>{niveles[index]}</td>
                  <td className={visible}>${precios[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className="d-flex w-100 justify-content-between"
          style={{ padding: 0, marginTop: "14px" }}
        >
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{
              width: "250px",
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{
              width: "250px",
            }}
            disabled={!buscar}
          >
            Registrar cobro
          </button>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Registrar cobro
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="d-flex" style={{ gap: "60px" }}>
                    <div
                      class="d-flex flex-column"
                      style={{ flexGrow: "1", width: "50px" }}
                    >
                      <label for="exampleFormControlInput1" class="form-label">
                        N° Factura
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value="5"
                        disabled
                      />
                    </div>
                    <div
                      class="d-flex flex-column justify-content-end mb-3"
                      style={{ width: "330px" }}
                    >
                      <label for="exampleFormControlInput1" class="form-label">
                        Fecha de cobro
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value="14/11/2022 14:45"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="d-flex" style={{ gap: "60px" }}>
                    <div
                      class="d-flex flex-column"
                      style={{ flexGrow: "1", width: "50px" }}
                    >
                      <label for="exampleFormControlInput1" class="form-label">
                        Monto
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={"$" + total}
                        disabled
                      />
                    </div>
                    <div
                      class="d-flex flex-column justify-content-end mb-3"
                      style={{ width: "330px" }}
                    >
                      <label for="exampleFormControlInput1" class="form-label">
                        Metodo de cobro
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected value="1">
                          Efectivo
                        </option>
                        <option value="2">Tarjeta de debito/credito</option>
                        <option value="3">Transferencia</option>
                        <option value="3">Codigo QR</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalToggle2"
                    href="#factura"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                    Factura
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="d-flex justify-content-between">
                    <h5>Workout </h5>
                    <p>Fecha: 15/11/2022 19:15</p>
                  </div>
                  <p>
                    Telefono: 154121375<br></br>
                    Dirección: San Juan 1950
                    <br></br>Email: workout@gmail.com
                  </p>
                  <hr></hr>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    DNI: 42391606 | Bruno Costa
                  </p>
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    Info: Inscripción a un Campeonato
                  </p>
                  <div className="d-flex justify-content-between w-100">
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      Detalles
                    </p>
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      Subtotal
                    </p>
                  </div>

                  <hr
                    style={{
                      marginTop: "0.4rem",
                      marginBottom: "0.4rem",
                    }}
                  ></hr>
                  <div className="d-flex justify-content-between w-100">
                    <p
                      style={{
                        margin: 0,
                        color: "gray",
                      }}
                    >
                      Inscripción al campeonato {nombreCampeonato}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: "gray",
                      }}
                    >
                      ${total}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "0.4rem",
                    }}
                  ></hr>

                  <div className="w-100 d-flex justify-content-end">
                    <h5>Total: ${total}</h5>
                  </div>
                </div>
                <div class="modal-footer d-flex justify-content-between align-content-center">
                  <div className="d-flex h-100">
                    <p
                      style={{
                        color: "green",
                        margin: 0,
                      }}
                    >
                      Se envió la factura por mail
                    </p>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      gap: "10px",
                    }}
                  >
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      class="btn btn-primary"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                    >
                      Imprimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Turnos;

function Select({ horarios, selected, setSelected, index }) {
  const { buscar } = useContext(AppContext);
  let disabled = selected[index] && buscar;
  console.log(disabled);
  return (
    <select
      class="form-select"
      aria-label="Seleccionar un horario"
      style={{ width: "150px" }}
      disabled={!disabled}
    >
      <option selected>Seleccionar</option>
      {horarios.map((horario) => {
        return <option value={horario}>{horario}</option>;
      })}
    </select>
  );
}

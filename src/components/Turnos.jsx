import React, { useMemo, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Turnos() {
  let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  let profesores = [
    "Ronnie Coleman",
    "Phil Heath",
    "Chris Bumstead",
    "Rocky Balboa",
    "Ronnie Coleman",
    "Rocky Balboa",
  ];
  let horarios = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const [selected, setSelected] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  let hoy = new Date();
  let ahora = hoy.toLocaleString();
  const { buscar, datos } = useContext(AppContext);
  let titulo_disabled = !buscar ? "disabled" : "";
  let titulo = buscar
    ? `Turnos disponibles: ${datos.categoria}`
    : "Turnos disponibles";
  let visible = buscar ? "dios" : "hidden";
  let transparente = buscar ? "" : "transparent";
  let dias_seleccionados = Object.values(selected).filter(
    (item) => item === true
  ).length;

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
              <th scope="col">Dia</th>
              <th scope="col">Hora</th>
              <th scope="col">Profesor</th>
            </tr>
          </thead>
          <tbody>
            {dias.map((dia, index) => {
              let elegido = profesores[index];
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
                          setSelected({
                            ...selected,
                            [index]: !selected[index],
                          });
                        }}
                      />
                    </div>
                  </th>
                  <td className={transparente}>{dia}</td>
                  <td>
                    {
                      <Select
                        horarios={horarios}
                        selected={selected}
                        setSelected={setSelected}
                        index={index}
                        visible={visible}
                      />
                    }
                  </td>
                  <td className={transparente}>{elegido}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className="d-flex w-100 justify-content-between"
          style={{ padding: 0 }}
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
                        value={dias_seleccionados <= 3 ? "$4000" : "$4500"}
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
                    Info: Pago de inscripción
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
                      Inscripción a la academia
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: "gray",
                      }}
                    >
                      $7000
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "0.4rem",
                    }}
                  ></hr>

                  <div className="w-100 d-flex justify-content-end">
                    <h5>Total: ${7000}</h5>
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

function Select({ horarios, selected, setSelected, index, visible }) {
  const { buscar } = useContext(AppContext);
  let disabled = selected[index] && buscar;
  return (
    <select
      class={"form-select-sm" + " " + visible}
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

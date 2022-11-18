import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Alumno() {
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
  return (
    <div className="row d-flex flex-grow-1 justify-content-center align-items-center">
      <form
        style={{
          display: "flex",
          width: "900px",
          gap: "10px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <h1
            className="display-5"
            style={{
              textAlign: "start",
              fontWeight: "bold",
              padding: 0,
              margin: "3px",
            }}
          >
            Registrar alumno
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
        </div>
        <div
          style={{
            display: "flex",
            width: "900px",
            gap: "10px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h4
            className="w-100"
            style={{
              margin: 0,
            }}
          >
            Datos del alumno
          </h4>
          <div>
            <label for="exampleInputEmail1" class="form-label">
              Nombre
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <label for="exampleInputEmail1" class="form-label">
              Apellido
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div
            className="d-flex"
            style={{
              gap: "15px",
            }}
          >
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Tipo documento
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  DNI
                </option>
                <option value="2">Pasaporte</option>
                <option value="3">Libreta civica</option>
              </select>
            </div>

            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Nro Documento
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Sexo
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Masculino
              </option>
              <option value="2">Femenino</option>
              <option value="3">No especificado</option>
            </select>
          </div>

          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Ciudad
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Villa Maria
              </option>
              <option value="2">Villa Nueva</option>
            </select>
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Direccion
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1" style={{ maxWidth: "75px" }}>
            <label for="exampleInputEmail1" class="form-label">
              Peso (kg)
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Categoria
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Principiante
              </option>
              <option value="2">Intermedio</option>
              <option value="3">Avanzado</option>
            </select>
          </div>

          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Telefono
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Grasa corporal
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div
            class="mb-1"
            style={{
              maxWidth: "75px",
            }}
          >
            <label for="exampleInputEmail1" class="form-label">
              Altura (m)
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr
          style={{
            width: "100%",
          }}
        />
        <div className="w-100">
          <h4
            style={{
              marginBottom: "10px",
            }}
          >
            Datos del medico de cabecera
          </h4>
          <div
            className="d-flex"
            style={{
              gap: "30px",
            }}
          >
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Nombre
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Apellido
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-1">
              <label for="exampleInputEmail1" class="form-label">
                Telefono
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
          }}
        />
        <div className="w-50">
          <h4
            style={{
              marginBottom: "10px",
            }}
          >
            Documentación
          </h4>
          <div
            class="mb-3 mt-1"
            style={{
              maxWidth: "400px",
            }}
          >
            <label for="formFile" class="form-label">
              Ficha medica
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
        <div
          style={{
            maxWidth: "400px",
          }}
        >
          <h4
            style={{
              marginBottom: "10px",
              visibility: "hidden",
            }}
          >
            Documentación
          </h4>
          <label for="formFile" class="form-label">
            Autorización
          </label>
          <input class="form-control" type="file" id="formFile" disabled />
        </div>
        <hr
          style={{
            width: "100%",
            marginTop: "0",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button
            className="btn btn-danger"
            style={{
              width: "250px",
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              width: "250px",
            }}
          >
            Registrar alumno
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Registrar alumno
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="modal-body"
                  style={{
                    color: "green",
                  }}
                >
                  Se registro al alumno con éxito
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Alumno;

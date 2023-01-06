import React from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Pendientes = () => {
  const navigate = useNavigate();

  const onPositive = () => {
    swal
      .fire({
        title:
          "¿Tiene alguna estrategia para controlar la erosión en las pendientes?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Si",
        cancelButtonColor: "#A41C14",
        cancelButtonText: "No",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: "¡Excelente!",
              text: "Excelente estrás previniendo la erosión del suelo por arrastres de materiales.  Describe tu estrategia",
              icon: "success",
              confirmButtonColor: "#66CB94",
              confirmButtonText: "Continuar",
              input: "text",
              inputPlaceholder: "Describe tu estrategia",
              inputAttributes: {
                "aria-label": "Describe tu estrategia",
              },
            })
            .then((result) => {
              if (result.isConfirmed) {
                navigate("/cobertura");
              }
            });
        }
        if (result.isDismissed) {
          navigate("/cobertura");
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        text: "Practicar agricultura en pendientes pronunciadas requiere de medidas preventivas para evitar la erosión del suelo debido al arrastre de materia orgánica. Si realizas agricultura sobre pendientes pronunciadas, asegúrate de prevenir la erosión mediante la implementación de cultivos en terrazas, curvas a nivel.",
        icon: "info",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/cobertura");
        }
      });
  };

  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/agregados")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/cobertura")}
        />
      </div>
      <h3>¿Posee cultivos ubicados en pendientes mayores al 1%?</h3>

      <br />
      <br />
      <div className="buttons">
        <a className="btn_primary" onClick={onPositive}>
          Si
        </a>
        <a className="btn_no" onClick={onNegative}>
          No
        </a>
      </div>
    </div>
  );
};

export default Pendientes;

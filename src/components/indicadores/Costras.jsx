import React from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Costras = () => {
  const navigate = useNavigate();

  const onPositive = () => {
    swal
      .fire({
        title: "¡Excelente!",
        text: "Es un buen síntoma",
        icon: "success",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/sales");
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        title: "¡Cuidado!",
        text: "Las costras sobre el suelo son un indicador de degradación física , es probable que tu suelo haya pasado por períodos sin cobertura vegetal viva o muerta,  expuesto a los factores ambientales que generan desecación, compactación  estas son señales que pueden estar poniendo en riesgo la fertilidad del suelo a largo plazo. El encostrado es un problema común en suelos con poca aglomeración. Resulta principalmente del impacto de las gotas de lluvia, causando que las partículas de arcilla de la superficie se dispersen y cierren los poros inmediatamente bajo la superficie. Las lluvias que siguen seguramente se escurrirán en vez de absorberse en el suelo.",
        icon: "warning",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/sales");
        }
      });
  };
  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/vocacion")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/sales")}
        />
      </div>
      <h3>¿Se observan costras en la superficie?</h3>

      <br />
      <br />
      <div className="buttons">
        <a className="btn_primary" onClick={onNegative}>
          Si
        </a>
        <a className="btn_no" onClick={onPositive}>
          No
        </a>
      </div>
    </div>
  );
};

export default Costras;

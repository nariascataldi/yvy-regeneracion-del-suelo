import React from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Sales = () => {
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
          navigate("/infiltracion");
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        title: "¡Cuidado!",
        text: "La presencia de sales son comunes en suelos de zonas áridas o suelos salinos, si no estás en este tipo de ambientes y se presentan sales en superficie, controla la calidad del agua de riego ya que pueden estarse incorporando sales a través del agua , a su vez en caso de que se trate de aguas salinas las cantidades de agua aportada deberán aumentar para evitar la salinización del suelo, es común la presencia de sales en superficie en cultivos bajo cubierta donde la lluvia no llega al suelo.",
        icon: "warning",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/infiltracion");
        }
      });
  };

  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/costras")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/infiltracion")}
        />
      </div>
      <h3>¿Se observan sales en la superficie?</h3>

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

export default Sales;

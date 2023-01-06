import React from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Infiltracion = () => {
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
          swal
            .fire({
              title: "¡¡Revisa tus prácticas de manejo!",
              text: "Mantén el suelo cubierto, realiza aportes de materia orgánica a través de cobertura vegetal viva o muerta, abonos orgánicos, evita la aplicación excesiva de fitosanitarios que afectan a los organismos del suelo.",
              icon: "info",
              confirmButtonColor: "#66CB94",
              confirmButtonText: "Continuar",
            })
            .then((result) => {
              if (result.isConfirmed) {
                navigate("/agregados");
              }
            });
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        title: "¡Cuidado!",
        text: " La capacidad de infiltración de agua en el suelo se asocia tanto a su textura cómo su estructura. La textura hace referencia a la cantidad de limo, arcilla y arena que posee un suelo, esta condición es genética y no la podemos cambiar con el manejo. La estructura de un suelo es de carácter cualitativo y  se asocia al ordenamiento espacial de las partículas, su capacidad de mantenerse en un determinado arreglo espacial, a su vez la estructura determina los espacios de aire en el suelo, es decir su porosidad y su capacidad para proveer un ambiente adecuado para el crecimiento de las plantas. Los problemas de infiltración muchas veces se producen por la pérdida de la estructura del suelo, la cual está asociada a labranzas agresivas, a la exposición del suelo a factores ambientales cómo lluvias, viento, a la pérdida de Materia orgánica y a la pérdida de actividad biológica.",
        icon: "warning",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: "¡Revisa tus prácticas de manejo!",
              text: "Mantén el suelo cubierto, realiza aportes de materia orgánica a través de cobertura vegetal viva o muerta, abonos orgánicos, evita la aplicación excesiva de fitosanitarios que afectan a los organismos del suelo.",
              icon: "info",
              confirmButtonColor: "#66CB94",
              confirmButtonText: "Continuar",
            })
            .then((result) => {
              if (result.isConfirmed) {
                navigate("/agregados");
              }
            });
        }
      });
  };

  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/sales")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/agregados")}
        />
      </div>
      <h3>
        ¿Tienes problemas de Infiltración de agua que no tenías en el pasado?{" "}
      </h3>

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

export default Infiltracion;

import React from "react";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Agregados = () => {
  const navigate = useNavigate();

  const onPositive = () => {
    swal
      .fire({
        text: "Si no se visualizan fácilmente es posible que nuestro suelo carezca de estructura adecuada para el desarrollo de las plantas, lo cual trae aparejado problemas tanto de infiltración cómo de circulación de aire. Revisa tus prácticas de manejo asegúrate de: Mantener el suelo cubierto. Aportar materia orgánica mediante la cobertura vegetal viva (cultivos de cobertura) material vegetal muerto(restos de poda, hojas secas), o abonos orgánicos. Evita labranzas agresivas",
        icon: "info",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/pendientes");
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        text: "Los agregados del suelo son agrupaciones de partículas, forman parte de la estructura del suelo, se ven fácilmente cerca de las raíces de las plantas ,  brindan estabilidad estructural a los suelos ya que generan espacios porosos, por donde fluye el agua y el aire que precisan las plantas para vivir. La presencia de agregados del suelo es un buen indicador de la salud del suelo. Es deseable que en los primeros 30cm contar con una estructura migajosa, porosa que permita una buena infiltración y circulación del aire. Lo opuesto de agregación es dispersión. En un suelo disperso, cada partícula individual de tierra es libre de volar por el viento o ser lavada por una corriente de agua.",
        icon: "info",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/pendientes");
        }
      });
  };

  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/infiltracion")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/pendientes")}
        />
      </div>
      <h3>¿Se observan agregados en la superficie?</h3>

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

export default Agregados;

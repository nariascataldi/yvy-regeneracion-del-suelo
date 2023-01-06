import React from "react";
import "./Vocacion.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import atras from "../../assets/atras.png";
import adelante from "../../assets/adelante.png";

const Vocacion = () => {
  const navigate = useNavigate();

  const onPositive = () => {
    swal
      .fire({
        title: "¡Excelente!",
        text: "Conocer la vocación del suelo es el primer paso para poder cuidarlo entender sus limitaciones y los alcances del mismo. Principalmente se distinguen las siguientes vocaciones: Agrícola, ganadera, agroforestal, forestal y de conservación",
        icon: "success",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/costras");
        }
      });
  };

  const onNegative = () => {
    swal
      .fire({
        title: "¡Cuidado!",
        text: "Si no conoces la vocación de tu suelo y notas que tu producción no está teniendo éxito conoce sus características y sus alcances, puedes encontrar más sobre tu suelo según tu zona acá: https://lh4.googleusercontent.com/gDbsh5wO0oZewOS5aNid4TY3CcQU4EaEzpx7LFl7UJeAI_Q6WZ73eUNEcjUntZoW_6sMv2zC6Q-f9lcbc1rsn3h7EZr9ERvdau0mFgxQSCAsm__l9GzkYRdS_R_eNgF680-1gm2T2NE9SC3ZuKHDDYkhRaqX_sUTVcNC0z-HO179tbSmtGSroyMHMbUCxzw",
        icon: "warning",
        confirmButtonColor: "#66CB94",
        confirmButtonText: "Continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/costras");
        }
      });
  };

  return (
    <div className="container">
      <div className="navegacion">
        <img
          src={atras}
          className="btn_nav"
          onClick={() => navigate("/productor")}
        />

        <img
          src={adelante}
          className="btn_nav"
          onClick={() => navigate("/costras")}
        />
      </div>
      <p>
        Cada suelo tiene una vocación, que está determinada por los materiales
        que lo originaron, el clima, el tiempo, la vegetación, entre otros
        factores.
      </p>
      <br />
      <br />
      <h3>¿Conoces la vocación del suelo de tu zona?</h3>

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

export default Vocacion;

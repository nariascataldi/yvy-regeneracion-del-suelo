import React from "react";
import "./Sencibilizacion.css";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import video from "../../assets/video.mp4";
import logo from "../../assets/logo.png";
import cuenta from "../../assets/cuenta.png";
import home from "../../assets/home.png";
import miembros from "../../assets/miembros.png";
import pin from "../../assets/pin.png";
import fincas from "../../assets/fincas.png";

const Sencibilizacion = () => {
  const navigate = useNavigate();

  const showMenu = () => {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".showcase").classList.toggle("active");
  };

  const showVideo = () => {
    swal
      .fire({
        title: "¿Desea ver el video?",
        text: "El video es de 3 minutos",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#66CB94",
        cancelButtonColor: "#A41C14",
        confirmButtonText: "Si, ver video",
        cancelButtonText: "No, continuar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            title: "El Suelo es Asombroso",
            width: 600,
            html: `<iframe width="500" height="315" src="https://www.youtube.com/embed/tZKvhRmGxxo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            showConfirmButton: false,
            showCloseButton: true,
          });
        }
      });
  };

  const onNavigate = () => {
    navigate("/productor");
  };

  return (
    <div className="App">
      <section className="showcase">
        <header>
          <img src={logo} className="logo" />
          <div className="toggle" onClick={showMenu}></div>
        </header>
        <video src={video} autoPlay muted loop></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Por qué el suelo es </h2>
          <h3>asombroso ?</h3>
          <p>
            El suelo es una de las más subestimadas y poco comprendidas,
            maravillas en nuestro frágil planeta. <br />
            Conocer su valor y sus cuidados es de vitál importancia.
          </p>
          <a className="btn_white" onClick={showVideo}>
            Ver video
          </a>
          <a className="btn_primary" onClick={onNavigate}>
            Comenzar
          </a>
        </div>
      </section>
      <div className="menu">
        <ul>
          <li>
            <img src={home} className="iconos" />
            <a href="#">Mi cooperativa</a>
          </li>
          <br />

          <li>
            <img src={miembros} className="iconos" />
            <a href="#">Miembros</a>
          </li>
          <br />

          <li>
            <img src={pin} className="iconos" />
            <a href="#">Geolocalización</a>
          </li>
          <br />

          <li>
            <img src={fincas} className="iconos" />
            <a href="#">Fincas</a>
          </li>
          <br />
          <li>
            <img src={cuenta} className="iconos" />
            <a href="#">Mi cuenta</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sencibilizacion;

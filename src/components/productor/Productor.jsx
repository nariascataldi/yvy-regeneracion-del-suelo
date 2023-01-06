import React from "react";
import "./Productor.css";
import { useNavigate } from "react-router-dom";

const Productor = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/vocacion");
  };

  return (
    <div className="container">
      <h3>Que tipo de productor eres?</h3>

      <div className="data-container">
        <div className="checklist">
          <br />
          <div className="checklist-item">
            <input type="checkbox" id="item-1" />
            <label for="item-1">
              <strong>Convencional </strong> con uso de insumos químicos.
            </label>
          </div>
          <br />

          <div className="checklist-item">
            <input type="checkbox" id="item-2" />
            <label for="item-2">
              <strong>Siembra Directa </strong>
              con uso de insumos químicos.
            </label>
          </div>

          <br />
          <div className="checklist-item">
            <input type="checkbox" id="item-3" />
            <label for="item-3">
              <strong>Agroecológica </strong>
              sin uso de insumos químicos incluídos dertilizantes NPK.
            </label>
          </div>

          <br />
          <div className="checklist-item">
            <input type="checkbox" id="item-4" />
            <label for="item-4">
              <strong>Orgánica </strong>
              sin uso de insumos químicos, con certificación de tercera parte.
            </label>
          </div>

          <br />
          <div className="checklist-item">
            <input type="checkbox" id="item-5" />
            <label for="item-5">
              <strong>Otra</strong>
            </label>
          </div>
        </div>
      </div>

      <br />
      <a className="btn_primary" onClick={onNavigate}>
        Siguiente
      </a>
    </div>
  );
};

export default Productor;

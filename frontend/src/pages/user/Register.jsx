import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword,] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="register-page">
     
      <button className="btn-inicio" onClick={() => navigate("/")}>
        Inicio
      </button>

      <div className="register-card">
        
        <div className="register-header">
          <h2 ref={headingRef} tabIndex="-1">Registro</h2>
        </div>

        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Correo electrónico:</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Medidor:</label>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Contraseña:</label>
            <input type={showPassword ? "text" : "password"} />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <input type={showPassword ? "text" : "password"} />
          </div>
        </div>


        <div className="register-footer">
          <span className="login-link">
            ¿Ya tienes una cuenta?
          </span>

          <button
            className="btn-register"
            onClick={() => navigate("/home")}
          >
            Registrarte
          </button>
        </div>
      </div>
    </div>
  );
}

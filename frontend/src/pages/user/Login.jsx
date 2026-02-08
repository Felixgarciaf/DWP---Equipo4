import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <button className="btn-inicio" onClick={() => navigate("/")}>
        Inicio
      </button>

      <div className="login-card">
     
        <div className="login-header">
          <h2>Inicio de sesión</h2>
        </div>

        <div className="form-group">
          <label>Usuario:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" />
        </div>

        <div className="login-actions">
          <button
            className="btn-secondary"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </button>

          <button
            className="btn-primary"
            onClick={() => navigate("/home")}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

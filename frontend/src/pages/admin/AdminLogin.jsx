import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const handleLogin = () => {
    let hayError = false;

    if (user.trim() === "") {
      setErrorUser(true);
      hayError = true;
    } else {
      setErrorUser(false);
    }

    if (password.trim() === "") {
      setErrorPassword(true);
      hayError = true;
    } else {
      setErrorPassword(false);
    }

    if (hayError) {
      setMensajeError("Todos los campos son obligatorios.");
      return;
    }

    setMensajeError("");

    // 👉 simulación de login admin
    localStorage.setItem("admin", "true");
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Inicio de sesión</h2>
        </div>

        {mensajeError && (
          <p className="error-message" role="alert">
            {mensajeError}
          </p>
        )}

        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="admin"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              if (e.target.value.trim() !== "") {
                setErrorUser(false);
                setMensajeError("");
              }
            }}
            className={errorUser ? "input-error" : ""}
            aria-invalid={errorUser ? "true" : "false"}
          />
          {errorUser && (
            <p className="error-message" role="alert">
              El usuario es obligatorio
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim() !== "") {
                setErrorPassword(false);
                setMensajeError("");
              }
            }}
            className={errorPassword ? "input-error" : ""}
            aria-invalid={errorPassword ? "true" : "false"}
          />
          {errorPassword && (
            <p className="error-message" role="alert">
              La contraseña es obligatoria
            </p>
          )}
        </div>

        <button className="btn-admin-login" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userRef = useRef(null);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const handleLogin = () => {
  
    if (user && password) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Inicio de sesión</h2>
        </div>

        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            placeholder="admin"
            ref={userRef}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-admin-login" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MenuAdmin() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();

   const botonRef = useRef(null);
  const menuRef = useRef(null);

  const cerrarSesion = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setMostrarMenu((prev) => !prev)}>ADMIN</button>

      {mostrarMenu && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            width: "230px",
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <p>
            <strong>Nombre</strong>
          </p>
          <p style={{ fontSize: "14px", color: "gray" }}>admin@email.com</p>

          <hr />

          <button style={{ width: "100%" }}>Mi perfil</button>
          <button style={{ width: "100%", marginTop: "5px" }}>
            Configuración
          </button>

          <button
            style={{
              width: "100%",
              marginTop: "10px",
              background: "#ff4d4d",
              color: "#fff",
            }}
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

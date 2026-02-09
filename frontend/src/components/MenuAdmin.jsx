import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function MenuAdmin() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();
  const toggleButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  const cerrarSesion = () => {
    localStorage.removeItem("admin");
    setMostrarMenu(false);
    toggleButtonRef.current?.focus();
    navigate("/admin");
  };

  useEffect(() => {
    if (!mostrarMenu) return;

    const timer = setTimeout(() => {
      firstMenuItemRef.current?.focus();
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMostrarMenu(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mostrarMenu]);

  return (
    <div style={{ position: "relative" }}>
      <button
        id="admin-toggle"
        aria-haspopup="menu"
        aria-expanded={mostrarMenu}
        aria-controls="admin-menu"
        onClick={() => setMostrarMenu((prev) => !prev)}
        ref={toggleButtonRef}
      >
        ADMIN
      </button>

      {mostrarMenu && (
        <div
          id="admin-menu"
          role="menu"
          aria-labelledby="admin-toggle"
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

          <button style={{ width: "100%" }} ref={firstMenuItemRef}>
            Mi perfil
          </button>

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

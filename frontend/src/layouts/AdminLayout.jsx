import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* BARRA SUPERIOR */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* ADMIN + MENÚ */}
        <div style={{ position: "relative" }}>
          <button onClick={() => setMostrarMenu(prev => !prev)}>
            ADMIN
          </button>

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
              <p><strong>Nombre</strong></p>
              <p style={{ fontSize: "14px", color: "gray" }}>
                admin@email.com
              </p>

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

        {/* BOTONES DE NAVEGACIÓN */}
        <button
          onClick={() => navigate("/admin/dashboard")}
          style={{ background: isActive("/admin/dashboard") ? "#2563eb" : "" }}
        >
          Panel
        </button>

        <button onClick={() => navigate("/admin/reports")}>
          Reportes
        </button>

        <button onClick={() => navigate("/admin/announcements")}>
          Avisos
        </button>

        <button onClick={() => navigate("/admin/schedules")}>
          Horarios
        </button>

        <button onClick={() => navigate("/admin/tips")}>
          Consejos
        </button>
      </header>

      {/* CONTENIDO DINÁMICO */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

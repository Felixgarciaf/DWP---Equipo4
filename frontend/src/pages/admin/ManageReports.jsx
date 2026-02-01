import { useNavigate } from "react-router-dom";

export default function ManageReports() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Gestión de Reportes</h1>

      <p>Reporte Zona Norte - Pendiente</p>
      <p>Reporte Centro - Resuelto</p>

      <button>Marcar Resuelto</button>
      <button>Eliminar</button>

      <br />
      <button onClick={() => navigate("/admin/dashboard")}>Volver</button>
    </div>
  );
}

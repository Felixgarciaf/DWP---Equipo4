import { useNavigate } from "react-router-dom";

export default function CrudSchedules() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Horarios de corte de agua</h1>

      <input placeholder="Nuevo horario" />
      <br />

      <button>Crear</button>
      <button>Editar</button>
      <button>Eliminar</button>

      <br />
      <button onClick={() => navigate("/admin/dashboard")}>Volver</button>
    </div>
  );
}

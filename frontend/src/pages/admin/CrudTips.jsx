import { useNavigate } from "react-router-dom";

export default function CrudTips() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Consejos para cuidar el agua</h1>

      <input placeholder="Nuevo consejo" />
      <br />

      <button>Crear</button>
      <button>Editar</button>
      <button>Eliminar</button>

      <br />
      <button onClick={() => navigate("/admin/dashboard")}>Volver</button>
    </div>
  );
}

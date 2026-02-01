import { useNavigate } from "react-router-dom";

export default function CrudAnnouncements() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Anuncios</h1>

      <input placeholder="Nuevo anuncio" />
      <br />

      <button>Publicar</button>
      <button>Editar</button>
      <button>Eliminar</button>

      <br />
      <button onClick={() => navigate("/admin/dashboard")}>Volver</button>
    </div>
  );
}

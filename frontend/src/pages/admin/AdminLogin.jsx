import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Administrador</h1>

      <input placeholder="Usuario Admin" />
      <br />
      <input placeholder="Contraseña" type="password" />
      <br />

      <button onClick={() => navigate("/admin/dashboard")}>Entrar</button>
    </div>
  );
}

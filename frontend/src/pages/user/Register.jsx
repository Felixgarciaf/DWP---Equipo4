export default function Register() {
  return (
    <div>
      <h1>Registro Usuario</h1>

      <input placeholder="Nombre" />
      <br />
      <input placeholder="Correo" />
      <br />
      <input placeholder="Contraseña" type="password" />
      <br />

      <button onClick={() => navigate("/Login")}>Volver Login</button>
      <button onClick={() => navigate("/home")}>Crear Cuenta</button>
    </div>
  );
}

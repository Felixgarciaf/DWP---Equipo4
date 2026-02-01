export default function Dashboard() {
  return (
    <div>
      <h1>Panel de Control</h1>

      <p>Bienvenido al panel de administrador.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "250px",
          }}
        >
          <h3>Total de reportes activos</h3>
          <strong style={{ fontSize: "28px" }}>70</strong>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "350px",
          }}
        >
          <h3>Últimos avisos publicados</h3>
          <ul>
            <li>Lomas de la Soledad – Fuga no atendida</li>
            <li>Sardán – Reportes de fugas en red</li>
            <li>Santiago Tula – Escasez y problemas de suministro</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

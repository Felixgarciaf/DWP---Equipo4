import { useLocation, NavLink } from "react-router-dom";
import KeyboardNav from "./KeyboardNav";
import { navLinkStyle } from "../styles/navLinkStyle";
export default function UserNavbar() {
      const location = useLocation();

  const routes = [
    "/",
    "/register",
    "/home",
    "/reports",
    "/status",
    "/notifications",
    "/schedule",
    "/tips",
  ];

  const currentIndex = routes.indexOf(location.pathname);

  return (
    <nav aria-label="Menú de usuario"  style={{ display: "flex", gap: "10px" , marginLeft: "900px"}}>
      <KeyboardNav routes={routes} currentIndex={currentIndex} />

      <NavLink to="/login" style={navLinkStyle}>Iniciar sesión</NavLink>
      <NavLink to="/home" style={navLinkStyle}>Inicio</NavLink>
      <NavLink to="/reports" style={navLinkStyle}>Reportes</NavLink>
      <NavLink to="/notifications" style={navLinkStyle}>Avisos</NavLink>
      <NavLink to="/schedule" style={navLinkStyle}>Horarios</NavLink>
      <NavLink to="/tips" style={navLinkStyle}>Consejos</NavLink>
    </nav>
  );
}

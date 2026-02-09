import { NavLink, useLocation } from "react-router-dom";
import KeyboardNav from "./KeyboardNav";
import "../styles/styles.css";

export default function UserNavbar() {
  const location = useLocation();
  const routes = [
    "/",
    "/home",
    "/reports",
    "/notifications",
    "/schedule",
    "/tips",
  ];

  const currentIndex = routes.indexOf(location.pathname);

  return (
    <header className="home-navbar">
     
      <div className="home-navbar-left">
        <div className="user-avatar"></div>
        <NavLink to="/" className="login-pill">
          Iniciar sesión
        </NavLink>
      </div>

     
      <nav className="home-navbar-menu" aria-label="Menú de usuario">
        <KeyboardNav routes={routes} currentIndex={currentIndex} />
        
        <NavLink to="/home" className="nav-pill">
          Inicio
        </NavLink>

        <NavLink to="/reports" className="nav-pill">
          Reportes
        </NavLink>

        <NavLink to="/notifications" className="nav-pill">
          Avisos
        </NavLink>

        <NavLink to="/schedule" className="nav-pill">
          Horarios
        </NavLink>

        <NavLink to="/tips" className="nav-pill">
          Consejos
        </NavLink>
      </nav>
    </header>
  );
}

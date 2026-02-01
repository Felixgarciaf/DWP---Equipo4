import { useLocation, NavLink } from "react-router-dom";
import KeyboardNav from "./KeyboardNav";
import { navLinkStyle } from "../styles/navLinkStyle";
export default function AdminNavbar() {
  const location = useLocation();


  const routes = [
    "/admin",
    "/admin/dashboard",
    "/admin/schedules",
    "/admin/announcements",
    "/admin/reports",
    "/admin/tips",
  ];

  const currentIndex = routes.indexOf(location.pathname);


  return (
    <nav style={{ display: "flex", gap: "10px" , marginLeft: "900px"}}>
      <KeyboardNav routes={routes} currentIndex={currentIndex} />

      <NavLink
        to="/admin/dashboard"
        style={navLinkStyle}
      >
        Panel
      </NavLink>

      <NavLink
        to="/admin/reports"
    style={navLinkStyle}
      >
        Reportes
      </NavLink>

      <NavLink
        to="/admin/announcements"
        style={navLinkStyle}
      >
        Avisos
      </NavLink>

      <NavLink
        to="/admin/schedules"
        style={navLinkStyle}
      >
        Horarios
      </NavLink>

      <NavLink
        to="/admin/tips"
        style={navLinkStyle}
      >
        Consejos
      </NavLink>
    </nav>
  );
}

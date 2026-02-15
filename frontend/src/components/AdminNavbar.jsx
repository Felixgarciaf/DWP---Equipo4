import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import KeyboardNav from "./KeyboardNav";
import { navLinkStyle } from "../styles/navLinkStyle";

const routes = [
  "/admin/dashboard",
  "/admin/reports",
  "/admin/announcements",
  "/admin/schedules",
  "/admin/tips",
];

export default function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 CORRECCIÓN IMPORTANTE
  const currentIndex = routes.findIndex((route) =>
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex < 0) return;

      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % routes.length;
        navigate(routes[nextIndex]);
      }

      if (e.key === "ArrowLeft") {
        const prevIndex =
          (currentIndex - 1 + routes.length) % routes.length;
        navigate(routes[prevIndex]);
      }

      if (e.key === "Enter") {
        navigate(routes[currentIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, navigate]);

  return (
    <nav
      aria-label="Navegación principal del administrador"
      role="navigation"
      style={{ display: "flex", gap: "0px", marginLeft: "900px" }}
    >
      <KeyboardNav
        routes={routes}
        currentIndex={currentIndex}
        aria-label="Navegación por teclado del administrador"
      />

      <NavLink
        to="/admin/dashboard"
        style={navLinkStyle}
        aria-current={
          location.pathname.startsWith("/admin/dashboard") ? "page" : undefined
        }
      >
        Panel
      </NavLink>

      <NavLink
        to="/admin/reports"
        style={navLinkStyle}
        aria-current={
          location.pathname.startsWith("/admin/reports") ? "page" : undefined
        }
      >
        Reportes
      </NavLink>

      <NavLink
        to="/admin/announcements"
        style={navLinkStyle}
        aria-current={
          location.pathname.startsWith("/admin/announcements")
            ? "page"
            : undefined
        }
      >
        Avisos
      </NavLink>

      <NavLink
        to="/admin/schedules"
        style={navLinkStyle}
        aria-current={
          location.pathname.startsWith("/admin/schedules")
            ? "page"
            : undefined
        }
      >
        Horarios
      </NavLink>

      <NavLink
        to="/admin/tips"
        style={navLinkStyle}
        aria-current={
          location.pathname.startsWith("/admin/tips") ? "page" : undefined
        }
      >
        Consejos
      </NavLink>
    </nav>
  );
}

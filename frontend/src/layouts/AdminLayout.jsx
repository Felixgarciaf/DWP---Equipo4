import { Outlet } from "react-router-dom";
import MenuAdmin from "../components/MenuAdmin";
import AdminNavbar from "../components/AdminNavbar";
import Breadcrumbs from "../components/Breadcrumbs";
export default function AdminLayout() {
  return (
    <div>
      <header  style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
        }}>
        <MenuAdmin />
        <AdminNavbar />
      </header>

      <main>
        <Breadcrumbs/>

        <Outlet />
      </main>
    </div>
  );
}



import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
export default function UserLayout() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <UserNavbar />
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

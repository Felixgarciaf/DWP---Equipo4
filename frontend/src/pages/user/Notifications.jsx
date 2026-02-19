import { useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

export default function Notifications() {
  const headingRef = useRef(null);

  const { data, error, loading } = useFetch('/notifications', {}, []);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  if (loading) {
    return (
      <div className="notifications-page" aria-busy="true">
        <Loader message="Cargando avisos..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="notifications-page">
        <p role="alert">Error al cargar avisos: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h2 ref={headingRef} tabIndex="-1">
          Avisos
        </h2>
      </div>

      <div className="notifications-grid">
        {data && data.length ? (
          data.map((n) => (
            <div key={n.id} className="notification-card">
              <div className="notification-image" />
              <div className="notification-content">
                <p>{n.title}</p>
                <p>{n.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay avisos.</p>
        )}
      </div>
    </div>
  );
}

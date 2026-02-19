import React from "react";
import "../styles/styles.css"; // loader styles are included here

export default function Loader({ message = "Cargando..." }) {
  return (
    <div
      className="loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="spinner" aria-hidden="true"></div>
      {/* visually hidden text for screen readers */}
      <span className="sr-only">{message}</span>
    </div>
  );
}

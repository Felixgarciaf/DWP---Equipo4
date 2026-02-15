import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KeyboardNav({ routes, currentIndex }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => {
      const tag = e.target.tagName;

      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        return;
      }

      if (currentIndex === -1) return;

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

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [routes, currentIndex, navigate]);

  return null;
}

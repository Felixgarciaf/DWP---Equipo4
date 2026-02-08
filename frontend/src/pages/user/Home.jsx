import "../../styles/styles.css";

export default function Home() {
  return (
    <div className="home-page">
    
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-left">
            <div className="home-title-skeleton"></div>
            <div className="home-line-skeleton"></div>
            <div className="home-line-skeleton short"></div>

            <button className="home-btn">Iniciar sesión</button>
          </div>

          <div className="home-right">
            <div className="home-image-placeholder"></div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-title"></div>
        <div className="home-section-content"></div>
      </section>
    </div>
  );
}

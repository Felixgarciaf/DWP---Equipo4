export default function Notifications() {
  return (
    <div className="notifications-page">
     
      <div className="notifications-header">
        <h2>Avisos</h2>
      </div>

    
      <div className="notifications-grid">
      
        <div className="notification-card">
          <div className="notification-image"></div>

          <div className="notification-content">
            <div className="notification-line"></div>
            <div className="notification-line short"></div>
            <div className="notification-line tiny"></div>
          </div>
        </div>

        <div className="notification-card">
          <div className="notification-image"></div>

          <div className="notification-content">
            <div className="notification-line"></div>
            <div className="notification-line short"></div>
            <div className="notification-line tiny"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

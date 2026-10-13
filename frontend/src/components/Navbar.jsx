function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Urban Digital Twin</h2>
        <p>Smart City Monitoring & Decision Support</p>
      </div>

      <div className="navbar-status">
        <span className="status-dot"></span>
        Dashboard
      </div>
    </header>
  );
}

export default Navbar;
function NavBar({ setActivePage }) {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <ul>
        <li><a href="#" onClick={() => setActivePage("home")}>Home</a></li>
        <li><a href="#" onClick={() => setActivePage("about")}>About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
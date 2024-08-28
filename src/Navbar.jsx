function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <a href="/">
              <img src="/assets/img/logo.png" alt="img" style={{ width: 35 }} />
            </a>
          </div>
          <div className="col p-0 m-0">
            <a className="navbar-brand" href="/">
              GSSI
            </a>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

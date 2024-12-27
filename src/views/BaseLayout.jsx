import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header Section */}
      <header className="d-flex align-items-center bg-light px-3">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary ms-3">Donate</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-light text-center py-3">
        <p>© Copyright 2024</p>
        <p>Powered by: Sayeb Mohaimen</p>
      </footer>
    </div>
  );
};

export default BaseLayout;

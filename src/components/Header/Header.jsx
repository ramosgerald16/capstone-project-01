import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Online Bookstore
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/best-sellers" className="nav-link">
                    Best Sellers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sale" className="nav-link">
                    Sale
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Collections
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/collections" className="dropdown-item">
                        Collection 1
                      </Link>
                    </li>
                    <li>
                      <Link to="/collections" className="dropdown-item">
                        Collection 2
                      </Link>
                    </li>
                    <li>
                      <Link to="/collections" className="dropdown-item">
                        Collection 3
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/new" className="nav-link">
                    New!
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pre-orders" className="nav-link">
                    Pre-Orders
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

import React from 'react';

const Test = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="/">
            <img src={logo} alt="icon" width="170" />
          </a>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="icon" width="170" />
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <span>
                {icons.map((icon) => {
                  return (
                    <a className="nav-icons" href="/">
                      <img src={icon} alt="icon" width="25" height="25" />
                    </a>
                  );
                })}
              </span>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <ul className="navbar-nav">
                  {links.map((link) => {
                    return (
                      <a className="nav-link" href="/">
                        {link}
                      </a>
                    );
                  })}
                </ul>
              </ul>
              {/* <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Test;

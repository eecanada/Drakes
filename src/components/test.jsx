import React from 'react';

const Test = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand nav-logo" href="/">
            <img src={logo} alt="icon" width="170" />
          </a>

          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="icon" width="170" />
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <span>
                {icons.map((icon) => {
                  return (
                    <a class="nav-icons" href="/">
                      <img src={icon} alt="icon" width="25" height="25" />
                    </a>
                  );
                })}
              </span>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <ul class="navbar-nav">
                  {links.map((link) => {
                    return (
                      <a class="nav-link" href="/">
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

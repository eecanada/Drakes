import React from 'react';

const NavBar = ({ logo, links, icons }) => {
  return (
    <>
      <nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
          <a class="navbar-brand nav-logo" href="/">
            <img src={logo} alt="icon" width="170" />
          </a>

          <div className="nav-icons-container nav-sm">
            {icons.map((icon) => {
              return (
                <a class="nav-icons" href="/">
                  <img src={icon} alt="icon" class="nav-bar-icons" />
                </a>
              );
            })}
          </div>

          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon custom-toggler"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {links.map((link) => {
                return (
                  <a class="nav-link" href="/">
                    {link}
                  </a>
                );
              })}
            </ul>
          </div>

          <div className="nav-icons-container nav-large">
            {icons.map((icon) => {
              return (
                <a class="nav-icons" href="/">
                  <img src={icon} alt="icon" width="25" height="25" />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

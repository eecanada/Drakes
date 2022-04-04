import React from 'react';

const NavBar = ({ logo, links, icons }) => {
  return (
    <>
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="/">
            <img src={logo} alt="icon" width="170" />
          </a>

          <div className="nav-icons-container nav-sm">
            {icons.map((icon, index) => {
              return (
                <a key={index} className="nav-icons" href="/">
                  <img src={icon} alt="icon" className="nav-bar-icons" />
                </a>
              );
            })}
          </div>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon custom-toggler"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((link, index) => {
                return (
                  <a key={index} className="nav-link" href="/">
                    {link}
                  </a>
                );
              })}
            </ul>
          </div>

          <div className="nav-icons-container nav-large">
            {icons.map((icon, index) => {
              return (
                <a key={index} className="nav-icons" href="/">
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

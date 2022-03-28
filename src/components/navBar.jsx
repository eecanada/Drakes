import React from 'react';

const NavBar = ({ logo, links }) => {
  return (
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="170" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {links.map((link) => {
              return (
                <a class="nav-link" href="#">
                  {link}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

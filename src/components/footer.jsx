import React from 'react';

const Footer = ({ footerText, icon, links1, links2, links3 }) => {
  return (
    <>
      <div className="row footer-row">
        <div className="col-5">
          <h1 className="footer-main-text"> {footerText}</h1>
        </div>
        <div className="col-5">
          <img className="footer-icon" src={icon} alt="" />
        </div>
      </div>

      <div className="links-container row">
        <div className="footer-links col-2">
          <ul>
            {links1.map((link, index) => {
              return (
                <li key={index}>
                  <a className="footer-links">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-links col-2">
          <ul>
            {links2.map((link, index) => {
              return (
                <li key={index}>
                  <a className="footer-links">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-3">
          <div>
            <p className="form-text">
              Keep up to date with new products and life at Drake's by entering
              your email below
            </p>
            <form className="form-text">
              <label className="d-block form-text">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value=""
                // onChange={handleSearchChange}
                className="input-form"
              />
              <button
                className="form-text button-footer"
                // onClick={handleClear}
                type="button"
              >
                Send
              </button>
              <span className="d-block mt-4 subscription-privacy-text">
                By subscribing to our newsletter, you agree to receive
                promotional content from Drake's in accordance with our Privacy
                Policy.
              </span>
            </form>
            <div>
              <ul className="d-flex flex-row social-ul">
                {links3.map((link, index) => {
                  return (
                    <li className="pl-2 list-style" key={index}>
                      <a className="social-link">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

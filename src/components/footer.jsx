import React from 'react';

const Footer = ({
  footerText,
  icon,
  links1,
  links2,
  links3,
  footerEmail,
  handleSubmit,
  handleFormChange,
  formSubmitted,
}) => {
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
                  <a href="/" className="footer-links">
                    {link}
                  </a>
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
                  <a href="/" className="footer-links">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-3 newsletter-col">
          <div>
            <p className="form-text">
              Keep up to date with new products and life at Drake's by entering
              your email below
            </p>
            <form className="form-text" onSubmit={handleSubmit}>
              <label className="d-block form-text">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={footerEmail}
                onChange={handleFormChange}
                className="input-form"
              />
              <button
                className="form-text button-footer"
                // onClick={handleClear}
                type="submit"
              >
                Send
              </button>
              {formSubmitted ? (
                <span className="d-block pt-1 subscription-privacy-text email-message ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>{' '}
                  Thank you for your subscription.
                </span>
              ) : (
                ''
              )}

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
                      <a href="/" className="social-link">
                        {link}
                      </a>
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

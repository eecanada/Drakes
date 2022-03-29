import React from 'react';
import Modal from 'react-bootstrap/Modal';
import modalIcon from '../assets/images/modal-icon.png';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
  const { handleFormChange, formSubmitted, handleSubmit, footerEmail } = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <img src={modalIcon} style={{ maxWidth: '10rem', margin: '0 auto' }} />
      {/* <Modal.Title id="contained-modal-title-vcenter">
          Keep up to date with new products and life at Drake's by entering your
          email below
        </Modal.Title> */}
      <Modal.Body>
        <div>
          <p className="modal-text">
            Keep up to date with new products and life at Drake's by entering
            your email below:
          </p>
          <form className="modal-text" onSubmit={handleSubmit}>
            <label className="d-block modal-text">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={footerEmail}
              onChange={handleFormChange}
              className="input-form"
            />
            <button className="form-text button-footer" type="submit">
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

            <span className="d-block mt-4 modal-privacy-text ">
              By subscribing to our newsletter, you agree to receive promotional
              content from Drake's in accordance with our Privacy Policy.
            </span>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

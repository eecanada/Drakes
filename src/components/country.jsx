import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Country(props) {
  // const { show, handleFormChange, formSubmitted, handleSubmit, footerEmail } =
  //   props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Title id="contained-modal-title-vcenter">
        Shopping in a different location?
      </Modal.Title>
      <Modal.Body>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Please select country</option>
            <option value="1">{`Australia ($ AUD)`}</option>
            <option value="2">{`Canada ($ CAD)`}</option>
            <option value="3">{`Denmark (kr. DKK)`}</option>
            <option value="4">{`Germany (€ EUR)`}</option>
            <option value="5">{`Hong Kong ($ HKD)`}</option>
            <option value="6">{`Italy (€ EUR)`}</option>
            <option value="7">{`Japan (¥ JPY)`}</option>
            <option value="8">{`Netherlands (€ EUR)`}</option>
            <option value="9">{`South Korea ($ USD)`}</option>
            <option value="10">{`Spain (€ EUR)`}</option>
            <option value="11">{`Sweden (kr SEK)`}</option>
            <option value="12">{`United Kingdom (£ GBP)`}</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Country;

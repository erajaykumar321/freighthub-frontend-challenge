import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailModal = props => {
  return (
    <Modal {...props} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>Shipment Detail's</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.item !== null && (
          <dl class='row'>
            <dt class='col-sm-3'>Description lists</dt>
            <dd class='col-sm-9'>
              A description list is perfect for defining terms.
            </dd>
          </dl>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailModal = props => {
  const data =
    props.item !== null
      ? Object.keys(props.item).map(key => {
          if (typeof props.item[key] === 'string') {
            return (
              <dl key={key} className='row'>
                <dt className='col-sm-3'>{key}:</dt>
                <dd className='col-sm-9'>{props.item[key]}</dd>
              </dl>
            );
          }
          return '';
        })
      : '';

  return (
    <Modal {...props} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>Shipment Detail's</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const CustomDialog = ({size, show,title,hideEvent,body}) => {
  const [modalshow,setModalShow]=useState(show);
  

  return (
<Modal
        size={size}
        show={modalshow}
        onHide={() => {setModalShow(false); if(hideEvent){ hideEvent();}}}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    );
};

export default CustomDialog;
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Model05 = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const[Deleted ,userDelted]=useState()
  const[TEst ,userTEst]=useState(false)
  const toggle = () => setModal(!modal);
  const Deletaresur = ( ) =>{
      if(Deleted==="Delete"){
        console.log(TEst)
        userTEst(!TEst)
      }
  }
  return (
    <div>
       
      <Button color="danger" onClick={toggle}>Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <p>if you arer sur you watn Delete it Said Delete</p>
            <p>{TEst}</p>
         <input value={Deleted}  onChange={(e)=>userDelted(e.target.value)}/>
         {console.log(Deleted)}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={Deletaresur}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Model05;
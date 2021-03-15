
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {UpdatedProduct} from '../../Redux/actions/allActions'
const ModalExample01 = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [name , setname]=useState()
  const [Prix , setPrix]=useState()
  const [Descraption , setDescraption]=useState()
  
  const toggle = () => setModal(!modal);
  const upDtatedUser = ()=>{
      dispatch(UpdatedProduct())
  }
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
     
      <Button color="danger" onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
            
        <p>Name</p>
     
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
        <p>Prix</p>
        <input type="Number" value={Prix} onChange={(e)=>setPrix(e.target.value)}/>
        <p>Descripation</p>
        <input value={Descraption} onChange={(e)=>setDescraption(e.target.value)}></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample01;

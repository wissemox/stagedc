import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch } from 'react-redux'
import {AddProduct , EditArticle} from '../../Redux/actions/allActions'
const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [name , setname]=useState()
  const[Prix , setPrix]=useState()
  const[Descraption,setDescraption]=useState()
  const[image,setImage]=useState()
  const email = JSON.parse(localStorage.getItem('email'))
  const disptach = useDispatch()
  const Adduser=()=>{
    disptach(AddProduct({name:name , Prix:Prix,Descraption:Descraption ,image:image}))
    disptach(EditArticle(email,{name:name , price:Prix,Descraption:Descraption}))
    setModal(!modal)

  }
  const toggle = () => setModal(!modal);
  
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
  return (
  <div>
    <Button color="danger" onClick={toggle}>Add Product</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
      <ModalBody>

        <p>Name</p>
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
        <p>Prix</p>
        <input type="Number" value={Prix} onChange={(e)=>setPrix(e.target.value)}/>
        <p>Descripation</p>
        <input value={Descraption} onChange={(e)=>setDescraption(e.target.value)}></input>
        <p>image</p>
        <input value={image} onChange={(e)=>setImage(e.target.value)}></input>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={Adduser}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default ModalExample;
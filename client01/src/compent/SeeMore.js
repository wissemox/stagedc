import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {FindProduct02 ,FindProductADD ,ADDProductVD} from '../Redux/actions/allActions'
import "./Seemore.css"
const SeeMore = () => {

    const dispatch = useDispatch()
    const Id = JSON.parse(localStorage.getItem('_id'))
    const Prix = JSON.parse(localStorage.getItem('Prix'))
    const name = JSON.parse(localStorage.getItem('name'))
    const image = JSON.parse(localStorage.getItem('image'))
   

    useEffect(()=>{
        dispatch(FindProduct02(Id))
        dispatch(FindProductADD())
     
    },[])
   const Descraption = useSelector(state => state.FindProduct01.ProductFind.UserFinded)
   
   const AddUserVd=()=>{
   
        dispatch(ADDProductVD({name:name ,Prix:Prix,image:image  }))
       
      
   }
    return (
        <div>
            <div className="PRoduct">
                <Link to="/Dashboard/Product/"><button>Goback</button></Link>
            </div>
            <div className="adzdfw">
           <div className="asaqw">
               <div className="dww">
                   <p>Name Product :</p>
               <p>{Descraption&&Descraption.name}</p>
               </div>
            <div className="wqa">
                <h2>Prix</h2>
            <p>{Descraption&&Descraption.Prix}</p>
            </div>
            
            <p>{Descraption&&Descraption.Descraption}</p>
            <img src={Descraption&&Descraption.image}/>
            </div>
            <div className="ASW">
          <a href="https://drive.google.com/file/d/12RTvaeQCW1Ifvihs2PycxWu9GG9OPOwT/view"> <button>Ficher excel</button></a>
          
          </div>
          <button onClick={AddUserVd} className="Modla">Valide</button> 
            </div>
        </div>
    )
}

export default SeeMore

import React,{useEffect , useState} from 'react'
import './Dashboard02.css'
import {useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import ModalExample from './Model'
import MappAddproduct from './MappAddproduct'
import MappAddproduct02 from './MappAddproduct02'
import {ProductAll03} from '../../Redux/actions/allActions'
import {Redirect} from 'react-router-dom'
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
const Dashboard02 = () => {
    const Name = useSelector(state => state.Login.UserLogged.UserUpdated.name)
      const Image = useSelector(state => state.Login.UserLogged.UserUpdated.FacebookIMG)
   const Articles = useSelector(state => state.Login.UserLogged.UserUpdated.Aritcles)
   const Product = useSelector(state => state.ProductAll02.Product.FindProduct)
   const [azdaz , setdzadaz]=useState(false)
    const url ="13.png"
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ProductAll03()) 
      
    },[])
    const logout =()=>{
        localStorage.removeItem('email');
        setdzadaz(true)
    }
    return (
        <div className="navbarar0">
            {azdaz&&<Redirect to="/"/>}
            <div className="Navbar">
                <p>Logo</p>
                <Link to="/Dashboard"> <img src="Dashboard.png"></img> </Link>
                <Link to="/Dashboard/Product"><img src="logo512.png"></img></Link> 
            </div>

            {/* Main */}
            <div className="Navbar02">
                <div className="Navbar003">
                  <p>Dashboard</p>
                  <div className="Flexbox">
                  <p>Welcome </p>
                  <h6>{Name&&Name}</h6>
                  <div className="ADsw">
                  <button onClick={logout} className="Logout">Logout</button>
                  </div>
                  </div>
                </div>
                {/* Main */}
            <div>
                <div className="WelcoemBack">
                    <div className="WelcomeBack03">
                    <h3>Welcome Back {Name && Name}</h3>
                  
                    <div className="Igm">
                    <img src="undraw_Updated_resume_re_q1or.svg"/>
                    </div>
                    </div>
                    <div>
                    <p>You are a member of Frigg's Dawnbringers</p>
                    </div>
                    <div className="WelcomeBack02">
                    </div>
                    <div className="Buttuon02">
                    <Link to="/Dashboard/Product" ><button className="Buttuon03">Check your Product</button></Link>
                    </div>
                   
                  
                </div>
                <div className="ProductALL">
                <div className="ProductyouAdd">
                    <p>lastes Add</p>
                    {Articles&&Articles.map((el)=><MappAddproduct el={el}/>)}
                    <p className="Adad">Edit or Remove Product</p>
                    {Product&&Product.map((el)=><MappAddproduct02 el={el}/>)}
                </div>
                <div className="Profile">
                    <p>your Profile</p>
                    <div className="ProfileD">
                    {Image ? <img src={Image}/> : <img src="13.png"/>}
                    </div>
                    <div className="Dazerurg">
                    <div className="Dazer">
                    <img src="Achivement.png"/>
                    <p>Achivement</p>
                    </div>
                    <div className="Dazer02">
                    <img src="Gols.png"/>
                    <p>Goels</p>
                    
                    </div>
                    <div className="Rank">
                        <img src="Rank.png"/>
                        <p>Rank</p>
                    </div>
                
                    </div>
                <ModalExample/>
                </div>
                </div>
            </div>
            </div>
  
          
    
        </div>
    )
}

export default Dashboard02

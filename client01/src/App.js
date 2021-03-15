
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import Navbar02 from './compent/Navbar'
import LoginPage from './compent/LoginPage'
import Register from './compent/Register'
import Dashboard from './compent/Dashboard'
import Profile from './compent/Profile'
import Product02 from './compent/Dashboard/Product02'
import SeeMore from './compent/SeeMore'
import IsaADmins from './compent/isaADmins'
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
function App() {

  return (
    <div className="App">
   
     
     <BrowserRouter>
     <Route exact path="/Dashboard" render={()=><Dashboard/>}></Route>
     <Route  exact path="/" render={()=><Navbar02/>}></Route> 
     <Route exact path="/login" render={()=><LoginPage/>}></Route>
     <Route exact path="/Register" render={()=><Register/>}></Route>
     <Route exact path="/Dashboard/profile" render={()=><Profile/>}></Route>
     <Route exact path="/Dashboard/Product" render={()=><Product02/>}></Route>
     <Route exact path="/Dashboard/Product" render={()=><Product02/>}></Route>7
     <Route exact path="/Dashboard/Product/SeeMore" render={()=><SeeMore/>}></Route>
     <Route exact path="/Admin" render={()=><IsaADmins/>}></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;

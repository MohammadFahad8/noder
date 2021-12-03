import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import {Routes, Route, Navigate, useNavigate,useLocation, Link} from 'react-router-dom';
import {Index} from './components/Index'
import {About} from './components/About'
import {UserContext} from './UserContext'
// //random component one    { old code }
//  export const Contact = ()=>
// {
//   let navigate = useNavigate()
//   const sendData = () =>
//   {
//     console.log('d')
//     // navigate("/about",{state:{status:"Sent from contact page"}})
//      return <Navigate to="/about" replace={true}/>
//   }

//   return(
  
  
//   <div>
//     <h1>Contact Page</h1>
    
//     <button type="button" onClick={sendData}>click to send </button>

//   </div>)

// }//random component two
//  export const About = ()=>
// {
//   let location = useLocation();
//   console.log(location);
//   return(<div>
//     <h1>About Page</h1>
//   </div>)

// }
//  export const Error = ()=>
// {
//   return(<div>
//     <h1>404 Not found</h1>
//   </div>)

// }
// export const Loginfirst = ()=>
// {
 
// return(
// <p>login form</p>
// )
// }
// export const Protected = (props)=>
// {

//   return props.auth?props.children:<Navigate to="/loginfirst" replace={true} />
// }
// //another flavour of sending parameters
// export const Public = ({auth, children })=>
// {
  
//   return (!auth)?children:<Navigate to="/about" replace={true} />
// }

//home component
function App() {
  const[user,setUser] = React.useState("user creds")
  const[auth,setAuth] = React.useState(false)

return(
  <div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>
  <UserContext.Provider value={{user,setUser,auth,setAuth}}>
  <Routes>
  
  <Route path="/" exact element={<Index/>} />
  <Route path="/about/" element={<About/>} />
  
  </Routes>
  </UserContext.Provider>
</div>
);

  //                                                                       OLD CODE
//   let location = useLocation()
// var[isLoggedIn,setLoggedIn] = React.useState(true);

//   return (
//     <div className="App">
//       {(location.pathname != '/404')&&
//            <h1>HEADER of App</h1>
//           }
//           {/* {(2==2)? <Navigate to="/loginfirst" replace={true}/>:''} */}
//      <Routes>
      
//        {/* <Route path="/" element={<App  />}/> */}
//        <Route path="/loginfirst" element={<Public auth={isLoggedIn}><Loginfirst  /></Public>}/>
//        <Route path="/404" element={<Error  />}/>
//        <Route path="/about" element={<Protected auth={isLoggedIn}><About  /></Protected>}/>
//        <Route path="/contact" element={<Contact  />}/>
//        <Route path="*" element={<Navigate to="/404" replace={true}  />}/>
//      </Routes>

     
//     </div>
//   );
}

export default App;

import React from "react";

import { UserContext } from "../UserContext";
import { login } from "../utils/login";
import  axios  from "axios";
export function Index() {
const {user,setUser,auth,setAuth} = React.useContext(UserContext)
const[userEmail,setEmail] = React.useState(null)
const login = () =>
{
    var options = {
        email:userEmail
    }
    axios.post("/students/login",options).then((res)=>{
        
        if(res.data.status == 200)
        {
            isAuthenticated()
            console.log("redirect to home ")
        }else
        {
            console.log("redirect to login ")
        }
    }).catch((err)=>{
        console.log(err)
    })
    

    
    
}
const logout = ()=>
{
    setUser(null);
    setAuth(false);
    axios.get("/students/logout").then((res)=>{
        alert("Login again")
        setTimeout(()=>{
            window.location.reload()
        },2000)
    })
}
const isAuthenticated = ()=>
{
    // return await fetch(`http://localhost:3855/students/verifyToken`,{

    //     method:"GET"
        
    //     })
        
    //     .then(response=>response.json() )
        
    //     .catch(err=>console.log(err))
    axios.get("/students/verifyToken").then((response)=>{
          console.log(response.data.auth)
    setUser({...response.data.user})
    setAuth(response.data.auth)
    console.log(user)
    })
  

  
}

React.useEffect(()=>{
  isAuthenticated()


},[])


  return (
    <div>
    <h2>Home</h2>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <pre>{JSON.stringify(auth, null, 2)}</pre>
    {auth ? (
      <button
        onClick={
          // call logout
          logout
        }
      >
        logout
      </button>
    ) : (
<>
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
      <button
        onClick={login}
      >
        login
      </button>
      </>
    )}
  </div>
  );
}
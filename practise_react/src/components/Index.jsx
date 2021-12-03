import React from "react";

import { UserContext } from "../UserContext";
import { login } from "../utils/login";
import  axios  from "axios";
export function Index() {
const {user,setUser} = React.useContext(UserContext)
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
const isAuthenticated = ()=>
{
    // return await fetch(`http://localhost:3855/students/verifyToken`,{

    //     method:"GET"
        
    //     })
        
    //     .then(response=>response.json() )
        
    //     .catch(err=>console.log(err))
    axios.get("/students/verifyToken").then((response)=>{
          console.log(response.data)
    setUser({...response.data.user})
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
    {user ? (
      <button
        onClick={() => {
          // call logout
          setUser(null);
        }}
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
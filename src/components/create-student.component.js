import React from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

const  CreateStudent = ()=>
{
    const [name,setName] = React.useState('');
    const [roll,setRoll] = React.useState('');
    const onSubmit = (e)=>
    {
        e.preventDefault();
        
        var ford = new FormData();
        const studentObject = {
          name: name,
          rollno: roll
        };
        console.log(ford)
        axios.post('http://localhost:4000/students/add-student',studentObject)
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>
        {
          console.log(err)
        })
    }
return(
<div className="container">
<form onSubmit={onSubmit}>
  
        
        
  <div className="form-group">
        <div className="row justify-content-center">
  <div  className="col-3">
    <label htmlFor="formGroupExampleInput">Name</label>
    </div>
    <div  className="col-9 w-50">
    <input type="text" className="form-control" id="formGroupExampleInput" onChange={(e)=>setName(e.target.value)} placeholder="john doe"/>
    </div>
  </div>
  </div>
        
  <div className="form-group mt-3">
        <div className="row justify-content-center">
  <div  className="col-3">
    <label htmlFor="formGroupExampleInput">Roll #</label>
    </div>
    <div  className="col-9 w-50">
    <input type="text" className="form-control" id="formGroupExampleInput"  onChange={(e)=>setRoll(e.target.value)} placeholder="bs-xxx"/>
    </div>
  </div>
  </div>
  <div className="form-group mt-3">
        <div className="row justify-content-center">
  
    <div  className="col-8">
    <button className="btn btn-danger"  type="submit">Add Student</button>
    </div>
  </div>
  </div>
  
</form>
</div>
);
}
export default CreateStudent;
import React from 'react';
import axios from 'axios';
const  EditStudent = (props)=>
{
    const[rollno,setrollno] = React.useState('');
    const[name,setname] = React.useState('');
    const onSubmit = (e) =>
    {
        e.preventDefault();
        console.log(rollno)
        console.log(name)
        const updated = {
            name: name,
            rollno: rollno,
        }
        axios.post("http://localhost:4000/students/update-student/"+props.match.params.id,updated)
        .then((res)=>{
            console.log(res)
        })
    }
    React.useEffect(async()=>{

            const data = await axios.get("http://localhost:4000/students/students/"+props.match.params.id)
            console.log(data.data)
            setname(data.data.name)
            setrollno(data.data.rollno)
    },[])
return(

<div className="container">
<form onSubmit={onSubmit}>
  
        
        
  <div className="form-group">
        <div className="row justify-content-center">
  <div  className="col-3">
    <label htmlFor="formGroupExampleInput">Name</label>
    </div>
    <div  className="col-9 w-50">
    <input type="text" value={name} className="form-control" id="formGroupExampleInput" onChange={(e)=>setname(e.target.value)} placeholder="john doe"/>
    </div>
  </div>
  </div>
        
  <div className="form-group mt-3">
        <div className="row justify-content-center">
  <div  className="col-3">
    <label htmlFor="formGroupExampleInput">Roll #</label>
    </div>
    <div  className="col-9 w-50">
    <input type="text" value={rollno} className="form-control" id="formGroupExampleInput"  onChange={(e)=>setrollno(e.target.value)} placeholder="bs-xxx"/>
    </div>
  </div>
  </div>
  <div className="form-group mt-3">
        <div className="row justify-content-center">
  
    <div  className="col-8">
    <button className="btn btn-primary"  type="submit">Update </button>
    </div>
  </div>
  </div>
  
</form>
</div>
);
}
export default EditStudent;
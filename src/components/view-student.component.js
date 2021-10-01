import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../custom-css/loader.css";
const  ViewStudent = ()=>
{
    const [student,setStudent]=React.useState('');
    const[check,setcheck] = React.useState(false)
    const[msg,setMsg] = React.useState('')
    const[showResponseMessage,setShowResponseMessage] = React.useState(false)
    
   const getAll = () =>
   {
       axios.get("http://localhost:4000/students/students")
       .then((res)=>{
           
        setStudent(res.data);
        console.log(student);
        setcheck(true)
       })
   }
   const deleteStudent = (id)=>
   {
       
       axios.get("http://localhost:4000/students/delete-student/"+id).then((res)=>{
           if(res.status == 200)
           {
               console.log(res)
               setMsg(res.data.msg)
               setShowResponseMessage(true);
               getAll()
           }
       })
   }
   React.useEffect(()=>{

    getAll()
    
   },[])

return(
<div>
  { showResponseMessage == true && <div className="row">
        <div className="col-12 col-md-12 bg-success">
            {msg}
        </div>
    </div>
    }
<table  className="table table-responsive">
    <thead>
        <tr>
        <th>Sr#</th>
        <th>Name</th>
        <th>Roll#</th>
        <th colSpan="2">Actions</th>
        </tr>
        </thead>
        <tbody>
        {
    check===true?student.map((row,index)=>(
     
     <tr key={row._id}>
         <td>{ index + parseInt(1)}</td>
        <td>{row.name}</td>
        <td>{row.rollno}</td>
        <td><Link to={`/edit-student/${row._id}`} className="btn btn-primary">Edit</Link></td>
        <td><button onClick={()=>deleteStudent(row._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    ))
    :
    <tr className="loading"><td>Loading&#8230;</td></tr>

    

} 
    
    </tbody>
</table>

</div>

);
}
export default ViewStudent;
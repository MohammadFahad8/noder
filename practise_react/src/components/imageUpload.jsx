import React from 'react';
import axios from 'axios'
export const  Imageupload = ()=>
{
    const[File,setImageFiles] = React.useState([])
    const[firstName,setFirstName] = React.useState(null)
    const[lastName,setLastName] = React.useState(null)
    const upload = ()=>
    {
        if (File) {
            console.log(File)
            var formData = new FormData();
            formData.append('firstname', firstName);
          
            formData.append('lastname', lastName);
            
            for (var i = 0; i < File.length; i++) {
                formData.append('photo', File[i]);
            }
            
            var options = {
                firstname:firstName,
                lastname:lastName,
                fileslist:File,
            }
            try {
                const res =  axios.post('http://localhost:3855/students/imgUpload', formData);
    
            }
            catch (err) {
                if (err) {
                    console.log(err);
                }
            }
        } else {
            console.log("Please enter all fields");
        }
    }
    return(
        <>
        <form encType="multipart/form-data">
        <input name="firstName"  onChange={(e)=>setFirstName(e.target.value)} placeholder="enter first name"/>
        <input name="lastName"  onChange={(e)=>setLastName(e.target.value)} placeholder="enter last name"/>
        <input type="file" name="photo"  multiple onChange={(e)=>setImageFiles(e.target.files)}/>
        <button onClick={upload}  type="button">submit</button>
        </form>
        </>
    )
}
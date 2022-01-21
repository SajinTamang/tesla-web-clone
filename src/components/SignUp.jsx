import React,{useState} from 'react';
import { useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {db} from "../firebase.config";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import styled from "styled-components";

function SignUp() {

    const [showPassword,setShowPassword] = useState(false);
    const [formData, setFormData] = useState ({
        userName : " ",
        firstName : " ",
        lastName : " ",
        dateOfBirth : " ",
        email : " ",
        password : " ",
        confirmPassword : " ",  
    })

    const navigate = useNavigate();

    const {userName,firstName,lastName,dateOfBirth,email,password,confirmPassword} = formData;

   const onChange= (e)=>{
        setFormData((prevState )=>({
          ...prevState,
          [e.target.id] :e.target.value
        }))
  }

const signUp = async (e)=>{
        e.preventDefault();
    try{
        //Recording User Authentication
        const auth = getAuth();

        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;

        updateProfile(auth.currentUser,{
            displayName:userName,
        })

        // Storing user data ina firebase database

        const formDataCopy =  {...formData};
        formDataCopy.timestamp = serverTimestamp();

        // Updating the user to database
        await setDoc(doc(db,"users",user.uid),formDataCopy)

        navigate("/");
        }
        catch(error)
        {
            console.log(error);
            alert(error);
            navigate("/sign-up");

        }
}


  return( 
  <SignUpContainer>
      <form onSubmit={signUp}>
      <h1>Sign Up page</h1>
       <h3>User Name</h3>
      <input type="text"  id= "userName" value={userName} onChange={onChange}/>
       <h3>First Name</h3>
      <input type="text" id= "firstName" value={firstName} onChange={onChange}/>
       <h3>Last Name</h3>
      <input type="text" id= "lastName" value={lastName} onChange={onChange}/>
       <h3>Date of Birth</h3>
      <input type="date" id= "dateOfBirth"  value={dateOfBirth} onChange={onChange}/>
      <h3>Email</h3>
      <input type="text" id= "email"  value={email} onChange={onChange}/>
      <h3>Password</h3>
     <input type={showPassword ? "text" : "password"} id= "password" value={password} onChange={onChange}/>
     <h3>Confirm Password</h3>
     <input type={showPassword ?"text" : "password"} id= "confirmPassword" value={confirmPassword} onChange={onChange}/>
     <p onClick={()=>{
         setShowPassword((prevState) => !prevState)
     }}>
         Show Password</p>
     <button>Sign up</button>
</form>
      {/* <Link to="/sign-in" className='registerLink'>
          Sign In Instead
        </Link> */}
 </SignUpContainer>
      
  );
}

export default SignUp;



const SignUpContainer = styled.div`
    width  :100% ;
    height:100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
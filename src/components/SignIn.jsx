import React,{useState} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import{getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email:'',
    password: ''
  });

  const {email,password} =formData;
 const onChange =(e) =>{
      setFormData((prevState) =>({
          ...prevState,
          [e.target.id] :e.target.value
      }))   
 }

 const signIn = async(e)=> {
   e.preventDefault();
      try{
            // Initiliazing data base
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            if(userCredential.user){
              navigate("/car-list")
            }
             toast.success("User Logged in ")

      }
      catch(error){
    
            toast.error("User credential incorrect");
     

      }
 }

  return( 
  <SignInContainer>
    <form onSubmit={signIn}>
      <h1>Sign in page</h1>
      <h3>Email</h3>
      <input type="text" id="email" value={email} onChange={onChange}/>
      <h3>Password</h3>
     <input type={showPassword ? "text" : "password"}  id="password" value={password}  onChange={onChange}/>
     <p onClick={()=>
       setShowPassword((prevState) => !prevState)}> Show Password</p>
     <button>Sign in </button>s
     <Link to="/sign-up">
       Not a member ? Register
     </Link>
     </form>

 </SignInContainer>
  
  );
}

export default SignIn;



const SignInContainer = styled.div`
    width  :100% ;
    height:100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
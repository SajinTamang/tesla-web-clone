import React,{useState} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import{getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import "../index.css";
import GoogleAuthentication from './GoogleAuthentication';


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
               toast.success(`Welcome ${auth.currentUser.displayName}`)
            }
            
      }
      catch(error){
            toast.error("User credential incorrect");
      }
 }

  return( 
  <SignInContainer>
    <Form onSubmit={signIn}>
      <Title>Sign in </Title>
      <SmallTitle>Email Address</SmallTitle>
      <Input type="text" id="email" value={email} onChange={onChange} placeholder="Enter your email address" />
      <SmallTitle>Password</SmallTitle>
     <PasswordWrapper> 
     <Password type={showPassword ? "text" : "password"}  id="password" value={password}   onChange={onChange} placeholder="Enter your password"/>
     <VisibilityIcon onClick={()=>
       setShowPassword((prevState) => !prevState)}/>
       </PasswordWrapper>
     <Button>Sign in </Button>
     <GoogleAuthentication/>
     <Link to="/sign-up" className='registerButton'>
       Not a member ? Register
     </Link>
     </Form>

 </SignInContainer>
  
  );
}

export default SignIn;



const SignInContainer = styled.div`
    width  :100% ;
    height:calc(100vh - 60px);
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: #ccc;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
`;

const Form = styled.form`
    border: 1px solid #ccc;
   height:90%;
   padding: 50px;
   background-color: white;
   width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;


const Title = styled.h1`
  margin:10px 10px 30px 10px;
  color: RGB(231, 14, 67);
`;

const SmallTitle = styled.h3`
  margin:10px;
`
const Input= styled.input`
  border: 1px solid #ccc;
  height: 60px;
  padding: 10px;
  margin: 10px;
  width: 100%;
   :focus{
    outline: none;
    }
`

const PasswordWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
`


const Password = styled.input`
    width: 100%;
    border: none;
    padding:20px 0;

    :focus{
    outline: none;
    }
`;

const Button = styled.button`
  padding: 15px 20px;
  font-size: 16px;
   background:RGB(231, 14, 67);
   color:white;
   font-weight: 600;
   border: none;
   margin:10px;
   cursor: pointer;
`;



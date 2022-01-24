import React,{useState} from 'react';
import { useNavigate,Link} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {db} from "../firebase.config";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import styled from "styled-components";
import VisibilityIcon from '@material-ui/icons/Visibility';
import GoogleAuthentication from './GoogleAuthentication';


function SignUp() {
    const [showPasswordText,setPasswordText ] = useState("Show Password");
    const [showPassword,setShowPassword] = useState(false);
    const [formData, setFormData] = useState ({
        userName : "",
        firstName : "",
        lastName : "",
        dateOfBirth : "",
        email : "",
        password : "",
        confirmPassword : ""
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
      <Form onSubmit={signUp}>
      <Title>Sign Up page</Title>
       <SmallTitle>User Name</SmallTitle>
      <Input type="text"  id= "userName" value={userName} onChange={onChange}/>
       <SmallTitle>First Name</SmallTitle>
      <Input type="text" id= "firstName" value={firstName} onChange={onChange}/>
       <SmallTitle>Last Name</SmallTitle>
      <Input type="text" id= "lastName" value={lastName} onChange={onChange}/>
       <SmallTitle>Date of Birth</SmallTitle>
      <Input type="date" id= "dateOfBirth"  value={dateOfBirth} onChange={onChange}/>
      <SmallTitle>Email</SmallTitle>
      <Input type="text" id= "email"  value={email} onChange={onChange}/>
      <SmallTitle>Password</SmallTitle>
     <Input type={showPassword ? "text" : "password"} id= "password" value={password} onChange={onChange}/>
     <SmallTitle>Confirm Password</SmallTitle>
     <Input type={showPassword ?"text" : "password"} id= "confirmPassword" value={confirmPassword} onChange={onChange}/>
     <ShowPassword onClick={()=>{
         setShowPassword((prevState) => !prevState)
             if(showPasswordText === "Show Password"){
                 setPasswordText("Hide Password");
             }
             else{
                 setPasswordText("Show Password");
             }
         
     }}>
       <Text> {showPasswordText}</Text> <VisibilityIcon/></ShowPassword>
      <ButtonWrapper> 
     <Button>Sign up</Button>
       <GoogleAuthentication/>
     </ButtonWrapper>
       <Link to="/sign-in" className='registerButton'>
       Already a member ? Sign in 
     </Link>
</Form>

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
    background-color: #ccc;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
`;

const Form = styled.form`
    border: 1px solid #ccc;
    margin-top: 20px;
   height:100%;
   padding: 50px;
   background-color: white;
   width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;


const Title = styled.h1`
  margin:-20px 10px 30px 10px;
  color: RGB(231, 14, 67);
`;

const SmallTitle = styled.h3`
  margin:5px 0 5px 10px;
`
const Input= styled.input`
  border: 1px solid #ccc;
  height: 40px;
  padding: 10px;
  margin: 10px;
  width: 100%;
   :focus{
    outline: none;
    }
`

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


const ShowPassword = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    cursor:pointer;
`;

const Text = styled.span`
    margin-right: 10px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;


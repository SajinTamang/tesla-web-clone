import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify";
import styled from 'styled-components';

function ForgotPassword() {
    const [email,setEmail] = useState();
    const onChange= (e)=>{
        setEmail(e.target.value);
    }

    const onSubmit = async(e)=>{
        e.preventDefault()
        try{
                const auth = getAuth();
                await sendPasswordResetEmail(auth,email);
                toast.success("Email was sent to rest the password");
        }
        catch(error){
            toast.error("Could not send reset email")
        }
    }

  return <ForgotPasswordContainer>    
    
        <Form onSubmit={onSubmit}>
               <Title>Forgot Password</Title>
            <Input 
            type="email"
            // className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
            />   
            <ButtonWrapper>            
                <Button>
                Send Reset 
                </Button>
                <Link  to="/sign-in">
                         <SmallTitle>Sign In</SmallTitle>
                </Link> 
                </ButtonWrapper>
                 <Link  to="/sign-up">
                      <SmallTitleText>Dont have an account ? Create one</SmallTitleText>
                </Link> 
        </Form>

  </ForgotPasswordContainer>;
}

export default ForgotPassword;


const ForgotPasswordContainer = styled.div`
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
   padding: 15px 20px;
  font-size: 16px;
   background:rgb(255, 255, 255);
   color:red;
   border: 1px solid red;
   font-weight: 600;
   margin:10px;
   cursor: pointer;
`
const SmallTitleText = styled.h4`
 text-decoration: underline;
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
const ButtonWrapper = styled.div`
    display: flex;
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

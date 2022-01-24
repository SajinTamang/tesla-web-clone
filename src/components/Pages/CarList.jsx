import React,{useState} from 'react';
import {getAuth, updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {toast} from "react-toastify";
import {updateDoc,doc} from "firebase/firestore";
import {db} from "../../firebase.config";
function CarList() {
  
    const auth = getAuth();

    const navigate = useNavigate();

    const [changeDetails,setChangeDetails] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email:auth.currentUser.email,
    })

    const {name,email} =formData;
    const onLogout = (e) =>{
            auth.signOut()
            toast.info(`See you next time  ${auth.currentUser.displayName}`)
            navigate("/");
    }

    const onChange =(e)=>{
    setFormData((prevState)=>({
          ...prevState,
      [e.target.id]:e.target.value,
    }))
    }
     const onSubmit = async()=>{
        try{
          if(auth.currentUser.displayName!==name){
            // update display name in firebase
            await updateProfile(auth.currentUser,{
              displayName:name
            })

            // Update in firestore

            const userRef = doc(db,"users",auth.currentUser.uid);
            await updateDoc(userRef, {
              name:name,
            })
            toast.success("profile details saved")
          }
        }
        catch(error){
            toast.error("could not update profile details");
        }
  }
  return <CarContainer>
       <p onClick={()=>{
         changeDetails && onSubmit();
          setChangeDetails((prevState)=>!prevState);
       }}>{changeDetails ? <ButtonGreen >Save</ButtonGreen>: <ButtonBlue>Edit</ButtonBlue>}</p>
       <Form>
        <Input type="text" value= {name} id="name" disabled={!changeDetails} onChange={onChange}/>
        <Input type="text" value= {email} id="email" disabled={!changeDetails} onChange={onChange}/>
        </Form>
      <ButtonRed type="button" onClick={onLogout}>Logout</ButtonRed>
  </CarContainer>;
}

export default CarList;


const CarContainer = styled.div`
    width: 100%;
    margin-top:60px;
    display: flex;
    align-items: flex-end;
    height: 60px;
    /* background-color: lightgray; */
`;

const Form=styled.form`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 60px;
   

`
const ButtonRed = styled.button`
  padding:20px;
   border:none;
   cursor: pointer;
   background-color: red;
   color: white;
   font-weight: 600;
`
const ButtonBlue = styled(ButtonRed)`
   background-color: #1336d1;
`;
const ButtonGreen = styled(ButtonRed)`
   background-color: #06c04d;
`

const Input= styled.input`
padding:20px;
 border:none;

 `

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
  return <CarContainer>Car List to buy
 <header className="profileHeader">
      <p className="pageHeader">
        
       <p onClick={()=>{
         changeDetails && onSubmit();
          setChangeDetails((prevState)=>!prevState);
       }}>{changeDetails ? <button>Save</button>: <button>Edit</button>}</p>
       <form>
        <input type="text" value= {name} id="name" disabled={!changeDetails} onChange={onChange}/>
        <input type="text" value= {email} id="email" disabled={!changeDetails} onChange={onChange}/>
        </form>
      </p>
      <button type="button" className="logOut" onClick={onLogout}>Logout</button>
    </header>


  </CarContainer>;
}

export default CarList;


const CarContainer = styled.div`
    width: 100%;
    margin-top:60px;
`;
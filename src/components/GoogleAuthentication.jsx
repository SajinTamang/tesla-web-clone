import React from 'react';
import styled from 'styled-components';
import {useLocation, useNavigate} from "react-router-dom"
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {doc,setDoc,getDoc, serverTimestamp} from "firebase/firestore";
import {db} from "../firebase.config";
import {toast} from "react-toastify";
// import googleIcon from "../assets/svg/googleIcon.svg";

function GoogleAuthentication() {
    const navigate = useNavigate();
    const location= useLocation();

    const onGoogleClick = async()=>{
        try{
         const auth= getAuth();
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth,provider);
                const user = result.user;

                // Check user on a database
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                

                // If user doesnt exist create user
                if(!docSnap.exists()){
                    await setDoc(doc(db, 'users',user.uid),{
                        name: user.displayName,
                        email:user.email,
                        timestamp: serverTimestamp()
                    })
                }
                else if(docSnap.exists()){
                 toast.success(`Welcome back ${user.displayName}`);
                }
                navigate("/")

            }catch(error){
                    toast.error("Could not authorize with Google");
            }
    }
  return (
  <GoogleContainer onClick={onGoogleClick}>
      <SmallText>Sign {location.pathname==="/sign-up" ? "up" : "in"} using google account</SmallText> <Image src="/Images/googleIcon.svg" alt="" width="34px" height="34px" />
  </GoogleContainer>);
}

export default GoogleAuthentication;

const GoogleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 15px 20px;
    border:2px solid lightgray;
    background-color: #ccc;
`
const Image = styled.img``;
const SmallText = styled.h3`
    margin-right: 10px;
    color: black;
`;

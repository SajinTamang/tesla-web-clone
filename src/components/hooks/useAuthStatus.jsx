import {useEffect, useState, useRef} from 'react';

import {getAuth, onAuthStateChanged} from "firebase/auth";


export const useAuthStatus = () => {
  
 
    const [loggedIn,setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const [profileTitle, setProfileTitle] = useState("Tesla Account");
 
    
 const isMounted = useRef(true);
    useEffect(()=>{
        if(isMounted){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {

            if (user) {
                setLoggedIn(true);
                console.log(isMounted);
                setProfileTitle("My profile");                
            }
            else{
                setProfileTitle("Tesla Account"); 
            }
            setCheckingStatus(false);
            });
        }
        return () =>{
            isMounted.current = false;
        }
       
    },[isMounted])
  return { loggedIn, checkingStatus ,profileTitle}
};


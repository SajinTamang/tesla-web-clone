import React,{useState} from 'react';
import {getAuth} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
function CarList() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email:auth.currentUser.email,
    })

    const {name , email} =formData;
    const onLogout = (e) =>{
            auth.signOut()
            navigate("/")
    }
  return <CarContainer>Car List to buy
 <header className="profileHeader">
      <p className="pageHeader">
         {formData.name}
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
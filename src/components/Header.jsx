import React, {useState} from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {NavLink } from "react-router-dom";
import {useAuthStatus} from "./hooks/useAuthStatus";

function Header() {
   
    const [burgerStatus, setBurgerStatus] = useState(false);
     const {checkingStatus,profileTitle}= useAuthStatus();
      if(checkingStatus){
         return <h1>Loading</h1>
    }
  
  
    return (
        
        <Container>

            <NavLink  to="/">
                 <img className="HeaderLogo" src ="/Images/logo.svg" alt="Tesla Logo" / >
                </NavLink>

            <Menu>
                <NavLink  to="/Model3">Model 3
                </NavLink>
                <NavLink  to="/ModelY">Model Y
                </NavLink>
                <NavLink  to="/ModelS">Model S
                </NavLink>
                <NavLink  to="/ModelX">Model X
                </NavLink>

            </Menu>
            <RightMenu>
                <NavLink to="/">Shop</NavLink>
               <NavLink  to="/car-list">{profileTitle}
                </NavLink>
            <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>
           
            <BurgerNav show= {burgerStatus}>
            
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrapper>
                   <li> <NavLink  to="/Model3">Model 3
                     </NavLink></li>
                       <li>  <NavLink  to="/ModelY">Model Y
                         </NavLink></li>
                      <li>   <NavLink  to="/ModelS">Model S
                        </NavLink></li>
                      <li>   <NavLink  to="/ModelX">Model X
                        </NavLink></li>
                    <li><NavLink to="/">Solar Panel</NavLink></li>   
                                  
                  
            </BurgerNav>
        </Container>
    )
}

export default Header;



const Container = styled.div`
      min-height: 60px;
      position:fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0 20px;
      top: 0;
      left:0;
      right:0;
      z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a,NavLink{
        font-weight: 600;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width:768px){
        display:none;
    }
`;


const RightMenu = styled.div`
    display:flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
       margin-right: 10px;
    }
`;


const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;


const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right:0;
    background:white;
    width: 300px;
    z-index: 16;
    padding:20px;
    display: flex;
    flex-direction: column;
    text-align: justify;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.1s ;
    li{
        list-style: none;
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a{
            font-weight: 600;
        }
    }
`;


const CustomClose= styled(CloseIcon)`
    margin-bottom: 20px;
    cursor: pointer;
`;


const CloseWrapper = styled.div`
    display:flex; 
   justify-content: flex-end;
    
`;
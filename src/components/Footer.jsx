import React from 'react';
import styled from 'styled-components';
// import {NavLink} from "react-router-dom";


function Footer() {
    return (
        <Container>
            {/* <Wrapper>
                <List>
                <ListItem> <NavLink  to="/Model3">Model 3
                </NavLink></ListItem>
               <ListItem> <NavLink  to="/ModelY">Model Y
                </NavLink></ListItem>
               <ListItem> <NavLink  to="/ModelS">Model S
                </NavLink></ListItem>
               <ListItem> <NavLink  to="/ModelX">Model X
                </NavLink></ListItem>
                </List>
                <Copyright>Sajin Tamang &#169; 2022</Copyright>
            </Wrapper> */}
        </Container>
    )
}

export default Footer

const Container = styled.div`
        height: 80px;
        width: 100vw;
        background-color: black;
        margin-top:auto;
`;

import React from 'react'
import styled from "styled-components";
import { Fade } from 'react-reveal';


function Interior({title,interiorBgImage}) {
    return (
        <InteriorContainer>
                 <Fade bottom>
                <h1>{title}</h1>
                </Fade>
                <ImageContainer bgImage ={interiorBgImage}></ImageContainer>               
        </InteriorContainer>
        
    )
}

export default Interior;


const InteriorContainer = styled.div`
    background: black;
    height: 100vh;
    width:100vw;
        h1{
            color:white;
            height:10vh;
            padding: 30px;
            margin-bottom: 30px;
        }
  
`;


const ImageContainer = styled.div`
     background-image: ${props => `url("/Images/${props.bgImage}")`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 90vh;
    
`;




import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Interior from './components/Interior';
import DetailInfo from './components/DetailInfo';

function ModelX() {
    return (
        <Container>
            <Section
                 title="Model X"
                backgroundImg = "model-x.jpg"
            />
            <Interior 
            title="All New Model X Interior"
            interiorBgImage ="new-interior.jpg"
            />
             <DetailInfo 
                    RightSrc="/Images/game.jpg"
                    LeftHeadingTitle ="Game from anyWhere"
                    LeftDescription="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
                />
                 <DetailInfo 
                    LeftSrc="/Images/connected.jpg"
                    RightHeadingTitle ="Stay Connected"
                    RightDescription="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
                />
                 <DetailInfo 
                    RightSrc="/Images/audio.jpg"
                    LeftHeadingTitle ="Your Best Audio System"
                    LeftDescription="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
                />
        </Container>
    )
}

export default ModelX;

const Container = styled.div`
    height:100vh;
    color: black;
    width:100vw;
`;

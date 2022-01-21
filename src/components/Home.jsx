import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
        <Container>
           
            <Section
                title="Model 3"
                description =" Electric vehicle incentives are now available on eligible Model 3 in ACT, NSW, TAS and VIC."
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom order"
                rightBtnText= "Existing inventory"
            />

            <Section
                title="Solar and Power Wall"
                description = "Power Everything"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Learn more"
            />
            <Section
                 title="Model Y"
                description =" Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftBtnText = "Custom order"
                rightBtnText= "Existing inventory"
            />
        
             <Section
                title="Model S"
                description ="Schedule a Touchless Test Drive"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom order"
                rightBtnText= "Existing inventory"
            />
            <Section
                title="Model X"
                description = "Schedule a Touchless Test Drive"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom order"
                rightBtnText= "Existing inventory"
            />
             <Section
                title="Solar for new roof"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg = "solar-roof.jpg"
                leftBtnText = "Custom order"
                rightBtnText= "Existing inventory"
            />
             <Section
                title="Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                leftBtnText = "Custom order"
                
            />

 
        </Container>
      
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;

`;
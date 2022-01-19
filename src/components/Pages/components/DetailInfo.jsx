import React from 'react'
import styled from "styled-components";
import { Fade } from 'react-reveal';
function DetailInfo({LeftSrc,RightSrc, LeftHeadingTitle,RightHeadingTitle,LeftDescription, RightDescription}) {
    return (
        <Fade bottom>
       <InformationContainer>
            <SectionContainer>
                          
                                <Left>
                                    <HeadingTitleLeft>{LeftHeadingTitle}</HeadingTitleLeft>
                                    <DescriptionLeft>{LeftDescription}</DescriptionLeft>

                                    {LeftSrc && 
                                    <LeftImage src={LeftSrc} height="100%" width="100%"  />   
                                    }
                                        
                                </Left>
                         
                                <Right> 
                                  <HeadingTitleRight>{RightHeadingTitle}</HeadingTitleRight>
                                    <DescriptionRight>{RightDescription}</DescriptionRight>
                                    {RightSrc && 
                                     <RightImage src={RightSrc} height="100%" width="100%"  />
                                    } 
                                </Right>
                            
            </SectionContainer>
            </InformationContainer>
            </Fade>

    )
}

export default DetailInfo

const InformationContainer = styled.div`
    background:black;
    height: 40vh;
    font-size: 24px;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const SectionContainer = styled.div`
display:flex;
height: 100%;
flex-direction: row;
justify-content: space-between;
width: 65%;
`;

const Left = styled.div`
    color: white;
    background: none;
    box-sizing: border-box;
    width:50%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    height: 100%;
`;

const Right = styled(Left)`
justify-content: center;
align-items:flex-end;
`;


const HeadingTitleLeft = styled.h4`
     color: white;
        margin-bottom: 20px;
        padding: 0 50px;
`;

const HeadingTitleRight = styled(HeadingTitleLeft)`
    
`;


const DescriptionLeft = styled.p`
      color: #ccc;
        text-align: justify;
        font-size: 16px;
        padding: 0 50px;
`;

const DescriptionRight = styled(DescriptionLeft)`
    
`;

const LeftImage = styled.img`
    
`;
const RightImage = styled(LeftImage)`
    
`;
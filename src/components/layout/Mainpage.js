import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import personBackground from '../../images/WelcomePerson.png';
import yellowWelcomeBackground from '../../images/YellowWelcome.png';
import whiteBackground from '../../images/WhiteWithShapes.png';
import frontend from '../../images/frontend.png';
import backend from '../../images/backend.png';
// import frontend from '../../images/frontend.png';
// import backend from '../../images/backend.png';// import personBackground from '../../images/background1.png';
// import background2 from '../../images/background2.png';
// import background3 from '../../images/background3.png';
// import background4 from '../../images/background4.png';
// import Project1 from '../../images/Project1.png';
// import background5 from '../../images/background5.png';
// import financeapp from '../../images/Finance-app.png';
// import background6 from '../../images/background6.png';
// import background7 from '../../images/background7.png';

const desktopWidth = 800;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PageSection = styled.div`
    display: inline-block;
    background-image: url(${props => props.backgroundUrl});
    width: 100%;
`;

const WelcomeText = styled.p`
    font-size: 24px;

    @media(min-width: ${desktopWidth}px){
        font-size: 42px;
    }
`;

const StylizedName = styled.p`
    font-size: 24px;
    font-family: 'Satisfy', cursive;
    font-weight: bold;
    color: #524A9D;

    @media(min-width: ${desktopWidth}px){
        font-size: 70px;
    }
`;

const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const SkillDiv = styled.div`
    display: inline-flex;
    flex-direction: row;
`;

const SkillContainer = styled.div`
    display: inline-block;
`;

const SkillList = styled.ul`
    list-style-type: none
`;

const Mainpage = () => {
    const [screenWidth, setScreenWidth] = useState(500);

    useEffect(() => {
        function handleResize(){
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <PageContainer>
            <PageSection backgroundUrl={screenWidth > desktopWidth ? personBackground : yellowWelcomeBackground}>
                <WelcomeText>Hi, I'm a Full-stack Web Developer</WelcomeText>
                <StylizedName>Tien Borland!</StylizedName>
            </PageSection>
            <PageSection backgroundUrl={whiteBackground}>
                <SkillSection>
                    <SkillContainer>
                        <SkillDiv>
                        <img src={frontend} />
                        </SkillDiv>
                    </SkillContainer>
                    <SkillContainer>
                        <img src={backend} />
                    </SkillContainer>
                </SkillSection>
            </PageSection>
        </PageContainer>
    )
}

export default Mainpage;
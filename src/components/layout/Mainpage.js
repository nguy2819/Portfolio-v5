import React from 'react';
import styled from 'styled-components';
import personBackground from '../../images/background1.png';
import background2 from '../../images/background2.png';
import background3 from '../../images/background3.png';
import frontend from '../../images/frontend.png';
import backend from '../../images/backend.png';
import background4 from '../../images/background4.png';
import Project1 from '../../images/Project1.png';
import background5 from '../../images/background5.png';
import financeapp from '../../images/Finance-app.png';
import background6 from '../../images/background6.png';
import background7 from '../../images/background7.png';

const StyledDiv = styled('div')`
    background-image: url(${personBackground});
    background-repeat: no-repeat;
    width: 100%;
    height: 443px;
    left: 19em;
    overflow: auto;
    position: absolute;
`;

const BackgrounDiv = styled('div')`
    background-image: url(${background2});
    height: 443px;
    overflow: none;
    position: relative;
`;

const BackgrounDiv2 = styled('div')`
    background-image: url(${background7});
    height: 640px;
    overflow: none;
    position: relative;
`;

const BackgroundDiv3 = styled('div')`
    background-image: url(${background3});
    height: 572px;
    overflow: none;
    position: relative;
`;

const BackgroundDiv4 = styled('div')`
    background-image: url(${background5});
    height: 500px;
    overflow: none;
    position: relative;
`;

const BackgroundDiv5 = styled('div')`
    background-image: url(${background6});
    background-repeat: no-repeat;
    height: 300px;
    overflow: auto;
    position: relative;
    left: 19em;
    height: 443px;
    top: 5em;
`;

const StyledP1 = styled('p')`
    top: 100px;
    left: 190px;
    font-size: 42px;
    position: absolute;
`;

const StyledP2 = styled('p')`
    top: 140px;
    left: 290px;
    font-size: 70px;
    font-weight: bold;
    font-family: 'Satisfy', cursive;
    color: #524A9D;
    position: absolute;
`;

const StyledParentContainer = styled('div')`
    display: flex;
`;

const StyledRowContainer = styled('div')` 
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    margin-top: 4.7em;
`;

const StyledRowBox = styled('div')`
    background-color: white; 
    display: block;
    height: 100%;
    width: 100%;
`;

const StyledImage1 = styled('img')`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 130px;
`;

const PinkHeader = styled('h2')`
    text-align: center;
    color: #EE6EA2;
    font-weight: bold;
    font-size: 17px;
    text-decoration: underline;
    margin-top: 35px;
`;

const StyledP4 = styled('p')`
    text-align: center;
`;

const ProjectMainHeader = styled('p')`
    color: white;
    font-size: 45px;
    font-weight: bold;
    margin-top: 0;
    padding-top: 30px;
    text-align: center;
`;

const ProjectSubText = styled('p')`
    color: white;
    font-size: 22px;
    text-align: center;
`;

const WhiteHeader3 = styled('p')`
    color: black;
    top: 36px;
    left: 526px;
    font-size: 22px;
    position: absolute;
`;

const WhiteHeader4 = styled('p')`
    color: black;
    top: 93px;
    left: 660px;
    font-size: 22px;
    position: absolute;
`;

const ProjectContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;

    @media(max-width: 500px){
        width: 100%;
    }
`;

const StyledImageProject = styled('img')`
    display: block;
    height: 100%;
    width: 100%;
`;

const ButtonHoverOnImageProject = styled('div')`
    position: absolute; 
    bottom: 0; 
    background: rgb(0, 0, 0);
    background: #FBD64A; 
    color: #f1f1f1; 
    width: 100%;
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
`;

const ProjectBox = styled('div')`
    position: relative;
    width: 50%;
    height:330px;

    &:hover ${ButtonHoverOnImageProject}{
        opacity: 1;
    }
`;

const StyledP5 = styled('p')`
    top: 87px;
    left: 740px;
    font-size: 70px;
    font-weight: bold;
    font-family: 'Satisfy', cursive;
    color: #524A9D;
    position: absolute;
`;

const Button = styled('button')`

    
        background-color: #FACF49;
        border: 2px solid #524A9D;
        border-radius: 12px;
        color: #524A9D;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 22px;
        margin: 4px 2px;
        cursor: pointer;
        position: absolute;
        top: 272px;
        left: 750px;
    

    &:hover {
        background-color: #524A9D;
        border: 2px solid #524A9D;

    }

    a {
        text-decoration: none;
    }

    &:hover a{
        color: white;
    }
`;

const Mainpage = () => {
    return (
        <div>
            <BackgrounDiv>
                <StyledDiv></StyledDiv>
                <StyledP1>Hi, I'm a Full-stack Web Developer</StyledP1>
                <StyledP2>Tien Borland!</StyledP2>
            </BackgrounDiv>
            <BackgrounDiv2>
                <StyledParentContainer>
                    <StyledRowContainer>
                        <StyledRowBox>
                            <StyledImage1 src={frontend} />
                            <PinkHeader>Languages I speak:</PinkHeader>
                            <StyledP4>HTML, CSS, Javascript, React, Redux</StyledP4>
                            <PinkHeader>Dev Tools:</PinkHeader>
                            <StyledP4>Styled Components</StyledP4>
                            <StyledP4>CSS-Tricks</StyledP4>
                            <StyledP4>Bootstrap</StyledP4>
                            <StyledP4>Materialize</StyledP4>
                            <StyledP4>Github/ Gitlab</StyledP4>
                            <StyledP4>Terminal</StyledP4>
                        </StyledRowBox>
                    </StyledRowContainer>
                    <StyledRowContainer>
                        <StyledRowBox>
                            <StyledImage1 src={backend} />
                            <PinkHeader>Languages I use:</PinkHeader>
                            <StyledP4>Javascript  (Node JS), Express, Python, SQL</StyledP4>
                            <PinkHeader>Dev Tools:</PinkHeader>
                            <StyledP4>Firebase</StyledP4>
                            <StyledP4>MongoDB</StyledP4>
                            <StyledP4>GraphQL </StyledP4>
                            <StyledP4>My SQL</StyledP4>
                            <StyledP4>RESTful APIs</StyledP4>
                        </StyledRowBox>
                    </StyledRowContainer>
                </StyledParentContainer>
            </BackgrounDiv2>
            <BackgroundDiv3>
                <ProjectMainHeader>My Projects</ProjectMainHeader>
                <ProjectSubText>Here are a few recent design projects. </ProjectSubText>
                <StyledParentContainer>
                    <ProjectContainer>
                        <ProjectBox>
                            <StyledImageProject src={Project1} />
                            <ButtonHoverOnImageProject><a href="https://christmas-wish-family.firebaseapp.com/" target="_blank">View Website</a></ButtonHoverOnImageProject>
                        </ProjectBox>
                        <ProjectBox>
                            <StyledImageProject src={financeapp} />
                            <ButtonHoverOnImageProject><a href="https://finance-app.netlify.com/" target="_blank">View Website</a></ButtonHoverOnImageProject>
                        </ProjectBox>
                    </ProjectContainer>
                </StyledParentContainer>
            </BackgroundDiv3>
            <BackgroundDiv4>
                <BackgroundDiv5></BackgroundDiv5>
                <WhiteHeader3>Do you think I can add value to your company? </WhiteHeader3>
                <WhiteHeader4>You're interested in working together?</WhiteHeader4>
                <StyledP5>Let's talk!</StyledP5>
                <Button>
                    <a href="/sendmessage">Start a conversation
                    </a>
                </Button>
            </BackgroundDiv4>
        </div>
    )
}

export default Mainpage;
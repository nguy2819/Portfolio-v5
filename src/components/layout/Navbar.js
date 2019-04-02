import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkedInIcon = styled('i')`
    color: white;
    font-family: "Font Awesome 5 Brands";
    font-style: normal;
    ::before{
        content: "\f0e1";
    }
`;

const GithubIcon = styled('i')`
    color: white;
    font-family: "Font Awesome 5 Brands";
    font-style: normal;
    ::before{
        content: "\f09b";
    }
`;

const EmailIcon = styled('i')`
    color: white;
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    ::before{
        content: "\f0e0";
    }
`;

const AcclaimIcon = styled('i')`
    color: white;
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    ::before{
        content: "\f102";
    }
`;

const NavContainer = styled('div')`
    width: 100%;
    background-color: #524A9D;
    overflow: auto;
`;

const StyledMainLink = styled(Link)`
    color: white;
    font-size: 1.5em;
    text-decoration: none;
    padding: 10px 25px;
    display: inline-block

`;

const NavBarSocialList = styled('ul')`
    display: inline;
    float: right;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const NavListItem = styled('li')`
    float: left;

    a{
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover {
        background-color: #111;
    }
`;

const Navbar = () => {
    return (
        <nav>
            <NavContainer>
                <StyledMainLink to='/'>Tien Borland</StyledMainLink>
                <NavBarSocialList>
                    <NavListItem>
                        <a href="https://www.linkedin.com/in/tien-borland/" >
                            <LinkedInIcon />
                        </a>
                    </NavListItem>
                    <NavListItem>
                        <a href="https://github.com/nguy2819" >
                            <GithubIcon />
                        </a>
                    </NavListItem>
                    <NavListItem>
                        <a href="https://www.youracclaim.com/users/tien-nguyen-borland/badges" >
                            <AcclaimIcon />
                        </a>
                    </NavListItem>
                    <NavListItem>
                        <NavLink to='/'>
                            <EmailIcon />
                        </NavLink>
                    </NavListItem>
                </NavBarSocialList>
            </NavContainer>
        </nav>
    )
}

export default Navbar;
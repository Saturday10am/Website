import React from 'react'
import styled, { css } from 'styled-components';
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

function Navbar() {
  return (
    <>
        <Container>
            <Link to='/'>
                <Logo>
                    <img src='https://images.collegedunia.com/public/college_data/images/logos/NMINS%20Logo.png' />
                    {/* <img src='./Images/10am-logo.png' /> */}
                </Logo>
            </Link>
            <Lists>
                <Links>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/'>
                        <li>Events</li>
                    </Link>
                    <Link to='/'>
                        <li>Gallery</li>
                    </Link>
                    <Link to='/'>
                        <li>About us</li>
                    </Link>
                    <Link to='/'>
                        <li>Contact us</li>
                    </Link>
                </Links>
            </Lists>
        </Container>
    </>
  )
}

export default Navbar

const Container = styled.div `
    /* background: #9b0a11; */
    /* color: #f8f9fe; */
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #f8f9fe;
    color: black;
    overflow-y: hidden;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    width: 100vw;
    box-shadow: rgb(155 149 149) 0px 0px 12px 0px;
`
const Link = styled.div `
    padding: 20px;
    li{
        list-style: none;
        cursor: pointer;
        letter-spacing: 2px;
    }
    li:hover{
        color: #ea1d27;
        transition: 0.2s;
    }
`
const Logo = styled.div `
    display: flex;
    img{
        height: 69px;
        width: 80px;
        cursor: pointer;
    }
`
const Lists = styled.div `

`
const Links = styled.div `
    display: flex;
`
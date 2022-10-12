import React from 'react'
import styled from 'styled-components'
function About(){
    return(
        <div>
            <ABOUT>
                <p>About Us</p>
            </ABOUT>
            <CONTENT>
                <p>Content for about us</p>
            </CONTENT>
            <TEAM>
                <p>Our Team</p>
            </TEAM>
            <HEAD>
                <p>Head</p>
                <img src=''></img>
                <HEADNAME>
                    <p>Raj Bharadwaj</p>
                </HEADNAME>
            </HEAD>
            <COHEAD>   
                <p>Co-Heads</p>
                <COHEAD1>
                    <img src=''></img>
                    <COHEAD1NAME>
                        <p>Name1</p>
                    </COHEAD1NAME>
                </COHEAD1>
                <COHEAD2>
                    <img src=''></img>
                    <COHEAD2NAME>
                        <p>Name2</p>
                    </COHEAD2NAME>
                </COHEAD2>
            </COHEAD>
        </div>
    )
}
export default About;
const ABOUT = styled.div`
    p{
        font-family: helvetica;
        margin-top:65px;
        margin-left:65px;
        font-size:1.2rem;
    }  
`
const CONTENT = styled.div`
    p{
        font-family: helvetica;
        margin-left:65px;
        margin-top:20px;
        line-height:1.5;
        font-size:1.2rem;
    }
`
const TEAM = styled.div`
    p{
        font-family: helvetica;
        font-size:2rem;
        margin-left:42.5%;
        margin-top:40px;
    }
`
const HEAD = styled.div`
    p{
        font-family: helvetica;
        font-size:1.5rem;
        margin-left:45%;
        margin-top:70px;
    }
`
const HEADNAME = styled.div`
    p{
        font-family: helvetica;
        font-size:1.1rem;
        margin-left:43.5%;
    }
`
const COHEAD = styled.div`
    p{
        font-family: helvetica;
        font-size:1.5rem;
        margin-left:43.5%;
        margin-top:80px;
    }
`
const COHEAD1 = styled.div`
    
`
const COHEAD1NAME = styled.div`
    p{
        font-family: helvetica;
        font-size:1.1rem;
        margin-left:25.5%;
    }
`
const COHEAD2 = styled.div`

`
const COHEAD2NAME = styled.div`
    p{
        font-family: helvetica;
        font-size:1.1rem;
        margin-top:-60px;
        margin-left:65%;
    }
`


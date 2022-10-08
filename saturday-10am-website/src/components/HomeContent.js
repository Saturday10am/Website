import React from 'react'
import styled from 'styled-components'
import {img} from './SpeakerDetails.js'
<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>

function HomeContent( {speaker} ) {
  return (
    <>
        <Container>
          <KeyEvents>
            <h2>Key Speakers</h2>
          </KeyEvents>
          <UnderLine>
            <span></span>
          </UnderLine>
          <KeySpeakers>
            <img src={img}/>
            <p>Lorem Ipsum is simply dummy
            Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy
            and typesetting industry.
            Lorem Ipsum is simply dummy
            and typesetting industry.
            and typesetting industry.Lorem Ipsum is simply dummy
            Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy
            and typesetting industry.
            Lorem Ipsum is simply dummy
            and typesetting industry.
            and typesetting industry.Lorem Ipsum is simply dummy
            Lorem Ipsum is simply dummy
            and typesetting industry.Lorem Ipsum is simply dummy
            and typesetting industry.
            Lorem Ipsum is simply dummy
            and typesetting industry.
            and typesetting industry.
            </p>
          </KeySpeakers>
        </Container>
    </>
  )
}

export default HomeContent

const Container = styled.div`
  margin-top: 30px;
    /* height: 50vh; */
    font-family: 'Lora', serif;;
`
const KeyEvents = styled.div`
  display: flex;
  justify-content: center;
      h2{
        font-size: 35px;
      }
`
const UnderLine = styled.div`
display: flex;
justify-content: center;
     span{
      width: 129px;
      height: 4px;
      display: inline-block;
      color: red;
      background-color: red;
      margin-top: 5px;
    }
`
const KeySpeakers = styled.div`
margin-top: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
  img{
    width: 400px;
    height: 400px;
  }
  p{
    width: 500px;
    font-size: 19px;
    line-height: 25px;
  }
`
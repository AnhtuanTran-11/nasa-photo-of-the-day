// This is the body
// type "rfc"
import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledBody = styled.div `
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
    img {
        height: 70vh;
        width: 40vw;
        border-radius: 10px;
        box-shadow: 5px 5px 15px 5px;
        border: 1px solid;
    }
    h1 {
        border: 1px solid;
    }
    `

export default function Body(props) {
    const {nasaInfo} = props;
    return (
        <StyledBody>
            <h1>Date: {nasaInfo.date}</h1>
            <img src={nasaInfo.url} alt = ""/>
        </StyledBody>
    )
}

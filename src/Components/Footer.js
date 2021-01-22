// This is the footer
import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledFooter = styled.div `
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
    font-family: Arial, Helvetica, sans-serif;
    `

export default function Footer(props) {
    const {nasaInfo} = props;
    return (
        <StyledFooter>
            <h1>{nasaInfo.explanation}</h1>
        </StyledFooter>
    )
}


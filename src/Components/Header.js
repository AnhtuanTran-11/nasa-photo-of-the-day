// This is the header
import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeader = styled.div `
    @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Anton&family=Coda+Caption:wght@800&family=Permanent+Marker&family=Red+Rose:wght@700&family=Roboto+Slab:wght@900&family=Roboto:wght@900&display=swap");
    
    color: ${props => props.theme.secondaryColor};
    font-family: 'Permanent Marker', cursive;
    font-size: 1.5rem;

    h1 {
        font-size: 5rem;
    }
    
    `

export default function Header(props) {
    const {nasaInfo} = props;
    return (
        <StyledHeader>
            <h1>Nasa Photo of the Day</h1>
            <h2>Photo Title: {nasaInfo.title}</h2>
        </StyledHeader>
    )
}


// This is the footer
import React from 'react'

export default function Footer(props) {
    const {nasaInfo} = props;
    return (
        <div>
            <h1>{nasaInfo.explanation}</h1>
        </div>
    )
}


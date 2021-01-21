// This is the body
// type "rfc"
import React from 'react'

export default function Body(props) {
    const {nasaInfo} = props;
    return (
        <div>
            <h1>{nasaInfo.date}</h1>
            <img src={nasaInfo.url} alt = "Nasa Photo of the Day"/>
        </div>
    )
}

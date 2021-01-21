// This is the header

import React from 'react'

export default function Header(props) {
    const {nasaInfo} = props;
    return (
        <div>
            <h1>{nasaInfo.title}</h1>
        </div>
    )
}


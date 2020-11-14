import React, { useState, useContext } from 'react'

export const HexagramContext = React.createContext();

function HexagramContextProvider(props) {

    const [hexagram, setHexagram] = useState("Hello World")

    const addHexagram = (hexagram) => {
        setHexagram(hexagram)
    }

    return (
        <HexagramContext.Provider value = {hexagram, addHexagram}>
            {props.children}
        </HexagramContext.Provider>
    )
}

export default HexagramContextProvider;


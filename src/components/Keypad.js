// Code Keypad Component Here
import React from "react"

function Keypad(){
    function handleCHange(e){
        console.log(`Entering password...`)
    }
    return (
        <input type="password" onChange={handleCHange}></input>
    )
}
export default Keypad
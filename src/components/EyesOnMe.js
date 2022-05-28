// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleBlur(e){
        console.log(`Hey! Eyes on me!`)
    }
    function handleFocus(e){
        console.log(`Good!`)
    }
    return(
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    )
}

export default EyesOnMe
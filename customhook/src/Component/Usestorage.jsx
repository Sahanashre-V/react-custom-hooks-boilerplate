import React from "react";

function Usestorage(value){
    let valeFromProps = value
    window.localStorage.setItem("context",valeFromProps);
    window.sessionStorage.setItem("context",valeFromProps)
    return null 
}

export default Usestorage
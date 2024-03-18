import React from "react";
import SignUpForm from "../components/SignUpForm";
function LoginPage({user, setUser}){

    return (
        <>
        <h1>LoginPage</h1>
        <SignUpForm user={user} setUser={setUser}/>
       </>
    )
}


export default LoginPage
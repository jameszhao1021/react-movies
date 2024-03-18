import React from "react";

function SignUpForm({setUser}){
    let inputUser
    function handleChange(e){
        e.preventDefault();
        inputUser = e.target.value
    }
    
    function handleSubmitEvent(e){
        e.preventDefault();
        setUser(inputUser)

    }
    return (
      
       <div>
        <form onSubmit={handleSubmitEvent}>
            <label>Name</label>
           <input type="text" name="name" onChange={handleChange}/>
           <button type="submit">Sign Up</button>
  
        </form>
       </div>
        
    )
}


export default SignUpForm
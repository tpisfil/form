
import React, { useState } from 'react';

const Form = props => {

    // const {firstName, lastName, email, password, confirmPassword} = props.data; 

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [formSubmitted,setFormSubmitted] = useState(false);

    const handleFirstName = input => {
        if (input.length < 2){
            return false;
        } else {
            return true;
        }
    }

    const handleEmail = input => {
        if (input.length < 5){
            return false;
        } else {
            return true;
        } 
    }

    const handlePassword = (p1, p2) => {
        if (p1 != p2) {
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <div className="container" >
        <form onSubmit={handleSubmit}>
            <div className="formGroup">
                <label htmlFor="firstName">First Name</label>
                <input onChange={e => setFirstName(e.target.value)} type="text" name = "firstName" value={firstName}/>
                {handleFirstName(firstName) ? "" : <p>First name must be at least 2 characters!</p>}
            </div>
            <div className="formGroup">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={e=> setLastName(e.target.value)} type="text" name = "lastName"/>
                {handleFirstName(lastName) ? "" : <p>Last name must be at least 2 characters!</p>}
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input onChange={e => setEmail(e.target.value)} type="text" name = "email"/>
                {handleEmail(email) ? "" : <p>Email must be at least 5 characters!</p>}
            </div>
            <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="text" name = "password"/>
            </div>
            <div className="formGroup">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={e => setPassword2(e.target.value)} type="text" name = "confirmPassword"/>
                {handlePassword(password, password2) ? "" : <p>Passwords do not match!</p>}
            </div>
            <input type="submit" value="Submit"/>
        </form>
        <hr />
        {
        formSubmitted ?
            <>
            <h3>Results: </h3>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4> 
            </> :""
        }
        </div>
    )
}

export default Form;
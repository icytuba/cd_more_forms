import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters.");
        } else {
            setFirstNameError("");
        }
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.");
        } else {
            setLastNameError("");
        }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    };
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfPasswordError("Password must be at least 8 characters.");
        } else if (e.target.value != password) {
            setConfPasswordError("Passwords must match.");
        } else {
            setConfPasswordError("");
        }
    };
    // const handleSubmitButton = () => {
    //     if (firstNameError) {
    //         return "disabled";
    //     } else if (lastNameError) {
    //         return "disabled";
    //     } else if (emailError) {
    //         return "disabled";
    //     } else if (passwordError) {
    //         return "disabled";
    //     } else if (confPasswordError) {
    //         return "disabled";
    //     } else {
    //         return '';
    //     }
    // };
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
    };
    
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ handleFirstName }/>
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ handleLastName }/>
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ handleEmail }/>
                    {
                        emailError ?
                        <p>{ emailError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ handlePassword }/>
                    {
                        passwordError ?
                        <p>{ passwordError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confPassword} onChange={ handleConfPassword }/>
                    {
                        confPasswordError ?
                        <p>{ confPasswordError }</p>
                        : ''
                    }
                </div>
                {/* <input type="submit" value="Create User" onTouchMoveCapture={handleSubmitButton} /> */}
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>
            </div>
        </div>
    );
};
export default UserForm;
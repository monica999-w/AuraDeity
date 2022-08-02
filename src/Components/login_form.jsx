import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import '../App.css';

const LoginForm = ({
                       onUsernameChanged, onPasswordChanged, onSubmit
                   }) => {

    const navigateTo = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleSave = () => {
        const data = {
            Email : email,
            Password : password,
            isActive : 1
        }
        const url  = '';
    };

    return (<Fragment>
        <div className="Section_top">
            <div className="content">
                <div className="text">Login Form</div>
                <form >
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" onChange={onUsernameChanged} placeholder="Email Id" required ></input>

                    </div>

                    <div className="field">
                        <span className="fa fa-lock"></span>
                        <input type="password" onChange={onPasswordChanged} placeholder="Password" ></input>
                    </div>

                </form>

                <button onClick={onSubmit}>Log in</button>

                <p className="para-2">
                    Not have an account? <a href="./Register">Sign Up Here</a>
                </p>

            </div>
        </div>
    </Fragment>);
}

export default LoginForm;
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const RegisterForm = ({
                          onUsernameChanged, onPasswordChanged, onSubmit
                      }) => {

    const navigateTo = useNavigate();

    return (<Fragment>
        <div className="Section_top">
        <div className="content">
            <div className="text">Register</div>
            <form>
                <div className="field">
                    <span className="fa fa-user"></span>
                    <input type="text" onChange={onUsernameChanged} placeholder="Email Id" required></input>

                </div>

                <div className="field">
                    <span className="fa fa-lock"></span>
                    <input type="password" onChange={onPasswordChanged} placeholder="Password"></input>
                </div>

            </form>

            <button onClick={onSubmit}>Sign Up</button>

            <p className="para-2">
                Already have an account? <a href="./Login">Login Here</a>
            </p>

        </div>
        </div>

    </Fragment>);
}

export default RegisterForm;
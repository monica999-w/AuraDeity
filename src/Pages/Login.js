import { useState } from "react";
import LoginForm from "../Components/login_form";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChanged(data) {
        setEmail(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onSubmit(data) {
        login();
    }

    async function login() {
        let [result] = await Promise.all([fetch("https://localhost:7152/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response) => {
            if (response.ok === false) {
                return;
            }

            const token = await response.json();
        })]);
    }

    return (
        <LoginForm
            onEmailChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Login;


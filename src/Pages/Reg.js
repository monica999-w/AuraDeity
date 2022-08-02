import {useState} from "react";
import RegisterForm from "../Components/register_form";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChanged(data) {
        setEmail(data.target.value)
    }

    function onPasswordChanged(data) {
        setPassword(data.target.value)
    }

    function onSubmit(data) {
        data.preventDefault();
        tryToRegister();
    }

    async function tryToRegister() {
        const url = "https://localhost:7152/api/auth/register";
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (response) => {
            if(response.ok === true) {
                var token = await response.json();
                console.log("Ok!");
            }  else {
                console.log("Error!");
            }
        });
    }

    return (
        <RegisterForm
            onUsernameChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}
            onSubmit={onSubmit}
        />
    )
}

export default Register;


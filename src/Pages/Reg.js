import { useState } from "react";
import RegisterForm from "../Components/register_form";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChanged(data) { }
    function onPasswordChanged(data) { }

    return (
        <RegisterForm
            onEmailChanged={onEmailChanged}
            onPasswordChanged={onPasswordChanged}

        />
    )
}

export default Register;


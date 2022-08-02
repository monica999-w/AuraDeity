import {useNavigate} from "react-router-dom";



const LoginForm = ({
                       onEmailChanged, onPasswordChanged, onSubmit
                   }) => {
    const navigate = useNavigate();

    return (
        <div className="Section_top">
            <div className="content">
                <div className="text">Login Form</div>
                <form >
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" onChange={onEmailChanged} placeholder="Email Id" required ></input>

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
    );
}
export default LoginForm;
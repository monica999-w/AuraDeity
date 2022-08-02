import { useNavigate } from "react-router-dom";

const Register_form = ({onEmailChanged, onPasswordChanged, onSubmit}) => {
    const navigate = useNavigate();

    return (<div className="Section_top">
        <div className="content">
            <div className="text">Register</div>
            <form>
                <div className="field">
                    <span className="fa fa-user"></span>
                    <input type="text" onChange={onEmailChanged} placeholder="Email Id" required></input>

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
    </div> );
}
export default Register_form;
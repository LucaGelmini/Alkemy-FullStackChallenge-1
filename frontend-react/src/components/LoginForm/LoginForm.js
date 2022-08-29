import './login.css'

export default function LoginForm(props){

    const {forwardedRef} = props;

    return (
        <>
        <div className="login-form-container" id="login-container" ref={forwardedRef}>
            <form className="login-form">
            <input className="login-text-input login-form-element" type="text" placeholder="Username or email"/>
            <input className="login-text-input login-form-element" type="text" placeholder="password"/>
            <button type="submit" className="submit-button login-form-element">Login</button>
            <button type="reset" className="close-button login-form-element" id="close-login-button">Close</button>
            </form>
        </div>
        </>
    )
}
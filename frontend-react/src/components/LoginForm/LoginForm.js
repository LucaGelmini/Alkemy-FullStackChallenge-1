import './login.css'

export default function LoginForm(props){

    const {forwardedRefs} = props;

    function closeButtonHandler(){
        forwardedRefs.current.style.visibility = 'hidden'
    }

    function submitHandler(e){
        e.preventDefault()
        //validation
        

    }

    function validationHandler(e){
        switch(e.target.name){
            case 'userOrEmail':
                console.log(e.target.value)
                break;
            case 'password':
                console.log(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        
        <div className="login-form-container" id="login-container" ref={forwardedRefs} onSubmit={submitHandler} onChange={validationHandler}>
            <form className="login-form">
                <input className="login-text-input login-form-element" type="text" placeholder="Username or email" name='userOrEmail'/>
                <input className="login-text-input login-form-element" type="password" placeholder="password" name='password'/>
                <button type="submit" className="submit-button login-form-element">Login</button>
                <button type="reset" className="close-button login-form-element" id="close-login-button" onClick={closeButtonHandler}>Close</button>
            </form>
        </div>
        
    )
}
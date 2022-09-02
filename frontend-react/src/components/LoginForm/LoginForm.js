import { useNavigate } from 'react-router-dom';
import './login.css'

// is an eMail or a username?
function isMail(input) {
    const mailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return null !== input.match(mailRegEx) ?
        true : false
};

export default function LoginForm(props) {

    const { forwardedRefs } = props;
    const navigate = useNavigate();

    function closeButtonHandler() {
        forwardedRefs.current.style.visibility = 'hidden'
    }

    async function submitHandler(e) {
        e.preventDefault()
        const { userOrEmail, password } = e.target.elements
        //validation


        const res = await fetch('http://localhost:3000/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                password: password.value,
                email: (isMail(userOrEmail.value) ? userOrEmail.value : null),
                username: (isMail(userOrEmail.value) ? null : userOrEmail.value)
            })
        })
        const data = await res.json()
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        (res.status === 202) && (navigate('/userBalance', { replace: true }))

    }

    function validationHandler(e) {
        switch (e.target.name) {
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
                <input className="login-text-input login-form-element" type="text" placeholder="Username or email" name='userOrEmail' />
                <input className="login-text-input login-form-element" type="password" placeholder="password" name='password' />
                <button type="submit" className="submit-button login-form-element">Login</button>
                <button type="reset" className="close-button login-form-element" id="close-login-button" onClick={closeButtonHandler}>Close</button>
            </form>
        </div>

    )
}
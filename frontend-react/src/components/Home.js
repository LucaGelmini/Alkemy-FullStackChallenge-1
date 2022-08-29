import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import LoginForm from "./LoginForm/LoginForm";

export default function Home (){

    let navigate = useNavigate();
    const loginContainerRef = useRef()

    function logInButtonHandler(){
        console.log( loginContainerRef)
        loginContainerRef.current.style.visibility = 'visible'
        // navigate('/userBalance')

    }

    return (
        <>
            <div>
                <h1>Stonks!</h1>
                <h2>Keep control of your stonks</h2>
            </div>
            <div>
                <a href="/register"><button>Sign In</button></a>
                <button onClick={logInButtonHandler}>Log In</button>
            </div>
            <div style={{backgroundColor: "lightblue"}}>
                <LoginForm forwardedRef={loginContainerRef} style={{backgroundColor: "lightblue"}}/>
            </div>
        </>
    )
}
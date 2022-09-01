import { useRef } from "react";
import LoginForm from "./LoginForm/LoginForm";

export default function Home() {

    const loginContainerRef = useRef();


    function logInButtonHandler() {
        loginContainerRef.current.style.visibility = 'visible'
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
            <div style={{ backgroundColor: "lightblue" }}>
                <LoginForm forwardedRefs={loginContainerRef} style={{ backgroundColor: "lightblue" }} />
            </div>
        </>
    )
}
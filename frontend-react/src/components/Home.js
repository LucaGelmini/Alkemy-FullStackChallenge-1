import { useNavigate } from "react-router-dom";

export default function Home (){

    let navigate = useNavigate();
    
    function logInButtonHandler(){
        console.log('logInButtonHandler')
        navigate('/userBalance')

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
        </>
    )
}
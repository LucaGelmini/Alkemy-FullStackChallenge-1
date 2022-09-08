import { useNavigate } from "react-router-dom";

export default function Home(props) {

    const { setLoginwindow } = props;
    const navigate = useNavigate();



    return (
        <div className='home'>
            <div className="home-message-container">
                <h2 className="home-main-message" >Keep track of your personal expenses and incomes!</h2>
                <p className="home-secondary-message" >Don't loose control of your money. Save, edit and delete your movements anytime anywhere.</p>
            </div>
            <div className="sample-img-container">
                <img src="smartphone.png" className="sample-img" alt="smartphone" />

            </div>
            <div className="home-buttons-container" >
                <button className='login-button' onClick={() => setLoginwindow(true)}>Log In</button>
                <button className='signin-button' onClick={() => navigate("/register")}>Sign In</button>
            </div>
        </div>
    )
}
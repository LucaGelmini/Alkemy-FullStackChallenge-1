import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'


export default function Header(props) {
    const { logedFlag, setLogedFlag, setLoginwindow } = props
    const [logInOut, setLogInOut] = useState('login');

    const navigate = useNavigate();

    useEffect(() => {
        setLogInOut(
            logedFlag ?
                'Log Out' :
                'Log In'
        )
    }, ([logedFlag]))


    const logInOutHandler = () => {
        if (logedFlag) {
            setLogedFlag(false);
            navigate('/');
        } else {
            setLoginwindow(true);
        }
    }

    return (
        <header className="main-header">
            <div className='logo-container'>
                <a href='/'>
                    <img className="logo" src="./logo.svg" alt="logo" />
                </a>
            </div>
            <div className='header-title-container'>
                <h1>Personal Balance</h1>
            </div>
            <div className='header-usergreatings-container'>

                <button className='logInOut-button' onClick={logInOutHandler} >{logInOut}</button>

            </div>

        </header>
    )
}
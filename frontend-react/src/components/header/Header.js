import './header.css'

export default function Header(props){
    return(
        <header className="main-header">
            <img className="logo" src="./stonks.png" alt="stonks"/>
            <h1>Personal Balance</h1>
            <p>Hi user</p>
        </header>
    )
}
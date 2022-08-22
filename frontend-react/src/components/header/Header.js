import './header.css'

export default function Header(props){
    return(
        <header className="main-header">
            <div className='logo-container'>
                <img className="logo"  src="./stonks.png" alt="stonks"/>   
            </div>
            <div className='header-title-container'>
                <h1>Personal Balance</h1>
            </div>
            <div className='header-usergreatings-container'>
                <p>Hi user</p>
            </div>
            
        </header>
    )
}
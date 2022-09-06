import './header.css'

export default function Header(props) {
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
                <p>Hi user</p>
            </div>

        </header>
    )
}
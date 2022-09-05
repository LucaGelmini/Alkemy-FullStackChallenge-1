import './header.css'

export default function Header(props) {
    return (
        <header className="main-header">
            <a href='/'>
                <div className='logo-container'>
                    <img className="logo" src="./logo.svg" alt="logo" />
                </div>
            </a>
            <div className='header-title-container'>
                <h1>Personal Balance</h1>
            </div>
            <div className='header-usergreatings-container'>
                <p>Hi user</p>
            </div>

        </header>
    )
}
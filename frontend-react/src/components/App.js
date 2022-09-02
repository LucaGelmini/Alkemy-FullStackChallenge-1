import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Home from './Home';
import RegisterForm from './registerForm/RegisterFrom';
import UserBalance from './UserBalance';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path='register' element={<RegisterForm />} />
                        <Route path='/userBalance' element={<UserBalance />} />
                        <Route path='/' element={<Home />} ></Route>

                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
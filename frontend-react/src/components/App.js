import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Header, Home, LoginForm, RegisterForm, UserBalance } from './index';

function App() {
    const [logedFlag, setLogedFlag] = useState(false);
    const [loginWindow, setLoginwindow] = useState(false);

    useEffect(() => {
        if (!logedFlag) sessionStorage.removeItem('currentUser')
    }, [logedFlag])




    return (
        <BrowserRouter>
            <div>
                {loginWindow && <LoginForm {...{ setLoginwindow, logedFlag, setLogedFlag }} />}
                <Header {...{ logedFlag, setLogedFlag, setLoginwindow }} />


                <main>
                    <Routes>
                        <Route path='register' element={<RegisterForm {...{ logedFlag, setLogedFlag }} />} />
                        <Route path='/userBalance' element={<UserBalance {...{ logedFlag, setLogedFlag }} />} />
                        <Route path='/' element={<Home {...{ logedFlag, setLogedFlag, setLoginwindow }} />} ></Route>

                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
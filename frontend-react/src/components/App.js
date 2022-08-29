import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import BalanceTable from "./balanceTable/BalanceTable";
import Header from './header/Header';
import Home from './Home';
import RegisterForm from './registerForm/RegisterFrom';
  
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <main>
                    <Routes>
                        <Route path='register' element={<RegisterForm />} />
                        <Route path='/userBalance' element={<BalanceTable />}/>
                        <Route path='/' element={<Home />} ></Route>

                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    )
}
  
export default App;
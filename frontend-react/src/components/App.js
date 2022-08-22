import './App.css';

import BalanceTable from "./balanceTable/BalanceTable";
import Header from './header/Header';
  
function App() {
    return (
        <div>
            <Header/>
            <main>
            <BalanceTable />

            </main>
        </div>
    )
}
  
export default App;
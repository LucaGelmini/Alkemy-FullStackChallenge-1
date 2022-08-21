import { useEffect, useState } from 'react';
import Registry from './Registry';
import './balanceTable.css'


export default function DataTable() {
  

  const[loadingTable, setLoadingTable] = useState(true);
  const [userBalance, setUserBalance] = useState([]);
  useEffect(()=>{
    async function fetcho(){

      const res = await fetch('http://localhost:3000/balances/user-2');
      const data = await res.json()
      setUserBalance(data)
      setLoadingTable(false)
    }
    if (loadingTable){
      fetcho()
    }
    // console.log(userBalance.data)
  }, [userBalance,loadingTable]);
  
  // console.log(loadingTable)
  return (
    <div className='balance-table'>

      {
        loadingTable? <h3>Cargando...</h3>:
        userBalance.data.map((row)=><Registry key={row.id} data={row}/> )
      }

    </div>
  );
}


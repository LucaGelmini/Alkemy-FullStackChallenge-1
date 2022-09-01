import { useEffect, useState } from 'react';
import Registry from './Registry';
import NewRegistry from './NewRegistry'
import './balanceTable.css'


export default function BalanceTable() {


  const [loadingTable, setLoadingTable] = useState(true);
  const [userBalance, setUserBalance] = useState([]);
  useEffect(() => {
    async function readRegistries() {

      const res = await fetch('http://localhost:3000/balances/user-2');
      const data = await res.json()
      setUserBalance(data)
      setLoadingTable(false)
    }
    if (loadingTable) {
      readRegistries()
    }
  }, [userBalance, loadingTable]);

  const addRegister = async (registerValues) => {
    const res = await fetch(`http://localhost:3000/balances/user-2/new`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(registerValues)
    })
    const data = await res.json()
    setUserBalance(data)
  }

  const updateRegister = async (registerValues, currentAmount, currentConcept, currentRecordDate) => {
    const res = await fetch(`http://localhost:3000/balances/user-2/edit/${registerValues.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        ...registerValues,
        amount: currentAmount,
        concept: currentConcept,
        record_date: currentRecordDate
      })
    })
    const data = await res.json()
    setUserBalance(data)
  }

  const deleteRegister = async (id) => {
    const res = await fetch(`http://localhost:3000/balances/user-2/delete/${id}`, {
      method: 'delete',
      mode: 'cors',
    })
    const data = await res.json()
    setUserBalance(data)
  }


  return (
    <>
      <div className='balance-table'>
        <NewRegistry onAdd={addRegister} />
        {
          loadingTable ? <h3>Loading...</h3> :
            userBalance.data.map((row) => <Registry key={row.id} data={row} onEdit={updateRegister} onDelete={deleteRegister} />)
        }

      </div>

    </>
  );
}


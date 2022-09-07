import { useEffect } from 'react';
import Registry from './Registry';
import NewRegistry from './NewRegistry'
import './balanceTable.css'


export default function BalanceTable(props) {

  const { loadingTable, setLoadingTable, userBalance, setUserBalance } = props;
  const userFromSession = () => JSON.parse(sessionStorage.getItem('currentUser'));

  // Read all table in db for create and update
  useEffect(() => {
    async function readRegistries() {
      const res = await fetch('http://localhost:3000/balances/get', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'token': JSON.stringify(userFromSession().token)
        },
        mode: 'cors',
      });
      const data = await res.json()
      setUserBalance(data)
      setLoadingTable(false)
    }
    if (loadingTable) {
      readRegistries()
    }
  }, [userBalance, loadingTable, setUserBalance, setLoadingTable]);

  // add one register
  const addRegister = async (registerValues) => {
    const res = await fetch(`http://localhost:3000/balances/new`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'token': JSON.stringify(userFromSession().token)
      },
      mode: 'cors',
      body: JSON.stringify({ ...registerValues })
    })
    const data = await res.json()
    setUserBalance(data)
  }

  const updateRegister = async (registerValues, currentAmount, currentConcept, currentRecordDate) => {
    const res = await fetch(`http://localhost:3000/balances/edit/${registerValues.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'token': JSON.stringify(userFromSession().token)
      },
      mode: 'cors',
      body: JSON.stringify({
        amount: currentAmount,
        concept: currentConcept,
        record_date: currentRecordDate.slice(0, 10),
      })
    })
    const data = await res.json()
    setUserBalance(data)
  }

  const deleteRegister = async (id) => {
    const res = await fetch(`http://localhost:3000/balances/delete/${id}`, {
      method: 'delete',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'token': JSON.stringify(userFromSession().token)
      }
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


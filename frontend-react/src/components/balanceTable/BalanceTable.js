import { useEffect, useMemo, useState } from 'react';
import Registry from './Registry';
import NewRegistry from './NewRegistry'
import './balanceTable.css'


export default function BalanceTable(props) {

  const {
    loadingTable,
    setLoadingTable,
    userBalance,
    setUserBalance,
    logedFlag,
    setLoginwindow
  } = props;

  const userFromSession = () => JSON.parse(sessionStorage.getItem('currentUser'));

  // READ all table in db for create and update
  useEffect(() => {
    async function readRegistries() {
      if (!logedFlag) {
        alert('Session expired');
        setLoginwindow(true);
        return
      }
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
  }, [userBalance, loadingTable, setUserBalance, setLoadingTable, logedFlag, setLoginwindow]);

  // CREATE one register
  const addRegister = async (registerValues) => {
    if (!logedFlag) {
      alert('Session expired');
      setLoginwindow(true);
      return
    }
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

  // UPDATE
  const updateRegister = async (registerValues, currentAmount, currentConcept, currentRecordDate) => {
    if (!logedFlag) {
      alert('Session expired');
      setLoginwindow(true);
      return
    }
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

  //DELETE
  const deleteRegister = async (id) => {
    if (!logedFlag) {
      alert('Session expired');
      setLoginwindow(true);
      return
    }
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


  const [filterOptions, setFilterOptions] = useState({ type: 'all', sort: 'record_date' });

  const filterHandler = (e) => {
    const currentFilter = { ...filterOptions };
    currentFilter[e.target.name] = e.target.value
    setFilterOptions(currentFilter);
    console.log(filterOptions.sort)
    console.log(filteredData.map((e) => e['record_date']));

  }

  const filteredData = useMemo(() => {
    if (!userBalance.data) return [];
    return userBalance.data
      .filter(e => {
        return (
          filterOptions.type === 'all' ? true : (e.operationType.type === filterOptions.type)
        )
      })
      .sort((a, b) => {
        if (filterOptions.sort === 'record_date') {
          return new Date(b.record_date) - new Date(a.record_date)
        }
        return - a[filterOptions.sort] + b[filterOptions.sort]
      });
  }, [userBalance.data, filterOptions])
  return (
    <>
      <div className='balance-table'>
        <NewRegistry onAdd={addRegister} />

        <div className='filters-container'>
          <form className='filer-form' onChange={filterHandler}>
            <img src='filter-icon.png' style={{ height: '1rem' }} />
            <select className='filter-selector' name="type">
              <option name='all' value={'all'} >All</option>
              <option name='incomes' value={'incomes'}>Incomes</option>
              <option name='expenses' value={'expenses'}>Expenses</option>
            </select>

            <select className='filter-selector' name="sort">
              <option name='date' value={'record_date'}>Date</option>
              <option name='amount' value={'amount'} >Amount</option>
            </select>
          </form>
        </div>

        {

          loadingTable ? <h3>Loading...</h3> :
            filteredData.map((row) => <Registry key={row.id} data={row} onEdit={updateRegister} onDelete={deleteRegister} />)
        }

      </div>

    </>
  );
}


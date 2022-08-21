// import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import DataGrid from './DataGrid/DataGrid';







const columns = [
  { field: 'concept', headerName: 'Concept', width: 130 },
  { field: 'createdAt', headerName: 'Date', width: 130 },
  {
    field: 'amount',
    headerName: 'Amount (ARS)',
    type: 'number',
    width: 120,
  },
  { field: 'flow', headerName: 'Flow direction', width: 130 },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];



export default function DataTable() {
  

  const[loadingTable, setLoadingTable] = useState(true);
  const [userBalance, setUserBalance] = useState([]);
  const [tableRows, setTableRows] = useState([])
  useEffect(()=>{
    async function fetcho(){

      const res = await fetch('http://localhost:3000/balances/user-2');
      const data = await res.json()
      setUserBalance(data)
      setLoadingTable(false)
    }
    if (loadingTable){
      fetcho()
    }else{
      // console.log(userBalance)
      // console.log(userBalance.data.map(e =>{
      //   return {concept:e.concept, createdAt:e.createdAt,amount: e.amount, flow:e.operationType.type}
      //   }))
      setTableRows(
        userBalance.data.map(e =>{
        return {concept: e.concept, amount: e.amount, createdAt: e.createdAt, flow:e.operationType.type}
        })
      )

    }
  }, [userBalance,loadingTable]);
  
  // console.log(loadingTable)
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* {console.log(userBalance.data)} */}
      {loadingTable? <h3>Cargando...</h3>:
      <DataGrid
        rows={tableRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[3,5,7]}
        checkboxSelection

      />}

    </div>
  );
}


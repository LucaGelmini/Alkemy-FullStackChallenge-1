import React, { useState } from 'react'

const NewRegistry = ({ onAdd }) => {
    const [amount, setAmount] = useState(0)
    const [concept, setConcept] = useState('')
    const [date, setDate] = useState(new Date())
    const [type, setType] = useState(1)
    const [openForm, setOpenForm] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault()
        onAdd({ amount, concept, date, type_id: type })
        setOpenForm(false)

    }

    return (
        <>
        {
            openForm ?
            <form className="new-registry-form">
                <label htmlFor="Amount">Amount</label>
                <input name="Amount" type="text" placeholder='Amount' value={amount} onChange={e => setAmount(e.target.value)} required></input>
                <label htmlFor="Concept">Concepto</label>
                <input name="Concept" type="text" placeholder='Concept' maxLength={30} value={concept} onChange={e => setConcept(e.target.value)} required></input>
                <label htmlFor="Date">Fecha</label>
                <input name="Date" type="datetime-local" placeholder='Date' value={date} onChange={e => setDate(e.target.value)}></input>
                <select value={type} onChange={e => setType(e.target.value)} required>
                    <option value="1">Ingreso</option>
                    <option value="2">Gasto</option>
                </select>
                <button type="button" onClick={e => handleAdd(e)}>Agregar</button>
            </form >:
            <button onClick={()=>setOpenForm(true)} className="new-registry-button">New Registry</button>
        }
        
        </>
    )
}

export default NewRegistry
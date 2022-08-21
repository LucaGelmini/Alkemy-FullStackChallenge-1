import React, { useState } from 'react'

const NewRegistry = ({ onAdd }) => {
    const [amount, setAmount] = useState(0)
    const [concept, setConcept] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [type, setType] = useState(1)

    const handleAdd = (e) => {
        e.preventDefault()
        onAdd({ amount, concept, description, date, type_id: type })
    }

    return <form>
        <label htmlFor="Amount">Cantidad</label>
        <input name="Amount" type="text" placeholder='Cantidad' value={amount} onChange={e => setAmount(e.target.value)} required></input>
        <label htmlFor="Concept">Concepto</label>
        <input name="Concept" type="text" placeholder='Concepto' maxLength={30} value={concept} onChange={e => setConcept(e.target.value)} required></input>
        <label htmlFor="Description">Descripción</label>
        <input name="Description" type="text" placeholder='Descripción' value={description} onChange={e => setDescription(e.target.value)}></input>
        <label htmlFor="Date">Fecha</label>
        <input name="Date" type="date" placeholder='Fecha' value={date} onChange={e => setDate(e.target.value)}></input>
        <select value={type} onChange={e => setType(e.target.value)} required>
            <option value="1">Ingreso</option>
            <option value="2">Gasto</option>
        </select>
        <button type="button" onClick={e => handleAdd(e)}>Agregar</button>
    </form >
}

export default NewRegistry
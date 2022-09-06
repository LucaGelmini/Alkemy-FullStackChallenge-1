import { useState } from "react"

export default function Registry({ data: { id, concept, amount, record_date, operationType: { type } }, onEdit, onDelete }) {
    const [isEditable, setIsEditable] = useState(false)
    const [currentAmount, setCurrentAmount] = useState(amount)
    const [currentConcept, setCurrentConcept] = useState(concept)
    const [currentRecordDate, setCurrentRecordDate] = useState(record_date)






    const registerValues = {
        id,
        concept,
        amount,
        record_date,
        operationType: type
    }

    function handleEdit() {
        if (isEditable) {
            onEdit(registerValues, currentAmount, currentConcept, currentRecordDate)
            setIsEditable(false)
        } else {
            setIsEditable(true)
        }
    }

    const handleDelete = () => {
        onDelete(id)
    }

    function dateTimeFormater(dateTime) {
        try {
            dateTime = dateTime.slice(0, 19);
            const splited = dateTime.split('T');
            const date = splited[0]
            const [year, month, day] = date.split('-');
            return (`${day}/${month}/${year}`)

        } catch (err) {
            if (dateTime === null) {
                // return null;
                console.error('no date value');
            }
            console.error(err)
            return dateTime
        }
    }


    return (
        <div className="balance-register-container">
            <div className="balance-register-main">
                <div className="registry-amount-container">
                    {isEditable ? <input
                        type='numeric'
                        className={'registry-amount-input editable'}
                        value={currentAmount}
                        placeholder='Amount'
                        onChange={e => setCurrentAmount(e.target.value)}
                    /> : <div
                        className={`registry-table-amount ${registerValues.operationType === 'expenses' ? 'expenses' : 'incomes'}`}
                    >
                        {registerValues.amount} $
                    </div>
                    }
                    <hr></hr>
                    <div>{registerValues.operationType}</div>

                </div>

                <div className="registry-concept">
                    {isEditable ?
                        <input
                            type='text'
                            defaultValue={registerValues.concept}
                            onChange={e => setCurrentConcept(e.target.value)}
                        /> :
                        <p>Concept: {registerValues.concept}</p>}
                </div>

                <div className="registry-date">
                    {isEditable ?
                        <input
                            type='date'
                            defaultValue={registerValues.record_date.slice(0, 10)}
                            onChange={e => { setCurrentRecordDate(e.target.value === '' ? null : e.target.value) }}
                        /> :
                        <p>{dateTimeFormater(registerValues.record_date)}</p>}

                </div>
            </div>

            <div className="registry-actions">
                {isEditable ?
                    <div className="registry-action-button-confirm" onClick={handleEdit}><img src="check.svg" alt="confirm" style={{ width: '100%' }} /></div> :
                    <div className="registry-action-button-edit" onClick={handleEdit}><img src="pencil.svg" alt="update" /></div>}

                <div className="registry-action-button-delete" onClick={handleDelete}><img src="trashcan.svg" alt="delete" /></div>
            </div>
        </div>
    )
}
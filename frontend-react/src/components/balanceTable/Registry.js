import { useState } from "react"

export default function Registry({data: {id,concept, amount,record_date,operationType:{type}}, onEdit, onDelete}){
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

    function handleEdit(){
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

    function dateTimeFormater(dateTime){
        dateTime = dateTime.slice(0,19);
        const [date, time] = dateTime.split('T');
        const [year, month, day] = date.split('-');
        return (`${day}/${month}/${year}, ${time}`)
    }


    return(
        <div className="balance-register-container">
            <div className="balance-register-main">
                <div className="registry-amount-container">
                    {isEditable? <input
                        type='numeric'
                        className={'registry-amount-input editable'} 
                        value={currentAmount}
                        placeholder='Amount'
                        onChange={e => setCurrentAmount(e.target.value)}
                        /> : <div 
                            className={`registry-table-amount ${registerValues.operationType === 'expenses'? 'expenses' : 'incomes'}`}
                        >
                            {registerValues.amount} $
                        </div>
                    }
                    <hr></hr>
                    <div>{registerValues.operationType}</div>

                </div>

                <div className="registry-concept">
                    {isEditable?
                    <input
                        type='text'
                        defaultValue={registerValues.concept}
                        onChange={e => setCurrentConcept(e.target.value)}
                    />:
                    <p>{registerValues.concept}</p>}
                </div>

                <div className="registry-date">
                    {isEditable?
                    <input 
                        type='datetime-local'
                        defaultValue={registerValues.record_date.slice(0,19)}
                        onChange={e => setCurrentRecordDate(e.target.value)}
                        />:
                    <p>{dateTimeFormater(registerValues.record_date)}</p>}
                    
                </div>
            </div>

            <div className="registry-actions">
                <div className="registry-action-button-delete" onClick={handleDelete}>Delete</div>
                {isEditable?
                <div className="registry-action-button-confirm" onClick={handleEdit}>Confirm</div>:
                <div className="registry-action-button-edit"  onClick={handleEdit}>Edit</div>}
                
            </div>
        </div>
    )
}
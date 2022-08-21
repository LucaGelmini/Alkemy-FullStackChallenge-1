import { useState } from "react"

export default function Registry({data: {id,concept, amount,record_date,operationType}}){
    // console.log(props.data)

    const [isEditable, setIsEditable] = useState(false)
    let registerValues = {
        id: id,
        concept: concept,
        amount: amount,
        record_date: record_date,
        operationType: operationType.type

    }

    function editHandler(){
        setIsEditable(!isEditable)
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
                    {isEditable?
                        <input type='numeric' defaultValue={registerValues.amount} className={'registry-amount-input'} ></input>:
                        <div 
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
                    <input type='text'defaultValue={registerValues.concept}></input>:
                    <p>{registerValues.concept}</p>}
                </div>

                <div className="registry-date">
                    {isEditable?
                    <input type='datetime-local' defaultValue={registerValues.record_date.slice(0,19)}></input>:
                    <p>{dateTimeFormater(registerValues.record_date)}</p>}
                    
                </div>
            </div>

            <div className="registry-actions">
                <div className="registry-action-button-delete">Delete</div>
                {isEditable?
                <div className="registry-action-button-confirm" onClick={editHandler}>Confirm</div>:
                <div className="registry-action-button-edit"  onClick={editHandler}>Edit</div>}
                
            </div>
        </div>
    )
}
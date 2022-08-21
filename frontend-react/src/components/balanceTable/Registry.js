export default function Registry(props){
    // console.log(props.data)


    let registerValues = {
        id: props.data.id,
        concept: props.data.concept,
        amount: props.data.amount,
        record_date: props.data.record_date,
        operationType: props.data.operationType.type

    }
    return(
        <div className="balance-register-container">
            <div className="balance-register-main">
                <div className="registry-amount-container">
                    <div 
                        className={`registry-table-amount ${registerValues.operationType === 'expenses'? 'expenses' : 'incomes'}`}
                    >
                        {registerValues.amount} $
                    </div>
                    <hr></hr>
                    <div>{registerValues.operationType}</div>

                </div>

                <div className="registry-concept">{registerValues.concept}</div>

                {console.log(registerValues.record_date.slice(0,19))}
                <div className="registry-date"><input type='datetime-local' defaultValue={registerValues.record_date.slice(0,19)}/*'2018-06-12T19:30'*/></input></div>
            </div>

            <div className="registry-actions">
                <div className="registry-action-button-edit">Edit</div>
                <div className="registry-action-button-delete">Delete</div>
            </div>
        </div>
    )
}
export default function Registry(props){
    console.log(props.data)


    let registerValues = {
        id: props.data.id,
        concept: props.data.concept,
        amount: props.data.amount,
        record_date: props.data.record_date,
        operationType: props.data.operationType.type

    }
    return(
        <div className="balance-register-container">
            <ul>{Object.keys(registerValues).map(key=><li>{key}: {registerValues[key]}</li>)}</ul>
            <div 
                className={`registry-table-amount ${registerValues.operationType == 'expenses'? 'expenses' : 'incomes'}`}
            >{registerValues.amount} $</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
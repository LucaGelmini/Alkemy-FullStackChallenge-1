import Row from "./Row"
import HeadersRow from "./HeaderRow"
import './dataGrid.css'

export default function DataGrid(props){
    // console.log(props.rows)

    return(
        <div className="dataGrid">
            <HeadersRow  data={props.columns} />
            {props.rows.map((r,idx) => <Row Key={idx} data={r}/>)}
        </div>

    )

}
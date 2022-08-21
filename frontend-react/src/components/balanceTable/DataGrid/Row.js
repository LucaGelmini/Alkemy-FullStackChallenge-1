import Cell from "./Cell"

export default function Row(props){
    // console.log(props.Key)
    return(
        // <div className="tableRow">{props.data.concept}</div>
        <div className="data-grid-row">
            {Object.values(props.data).map(
                (cellData,idx) => <Cell Key={idx} data={cellData} />
            )}
            <div>action Cell</div>
        </div>
    )
}
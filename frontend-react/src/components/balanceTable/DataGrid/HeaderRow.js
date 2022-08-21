export default function HeadersRow(props){

    return(
        <div className="data-grid-header-row">
            {[...props.data.map(a=><div className="header-data-grid-cell">{a.headerName}</div>), 'Actions']}
        </div>

    )
}
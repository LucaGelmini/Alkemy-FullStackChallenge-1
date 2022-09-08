import { useState } from "react";
import BalanceChart from "./balanceChart/BalanceChart";
import BalanceTable from "./balanceTable/BalanceTable";

export default function UserBalance(props) {
    const { logedFlag, setLogedFlag, setLoginwindow } = props;
    const [loadingTable, setLoadingTable] = useState(true);
    const [userBalance, setUserBalance] = useState([]);


    return (
        <div className="balance-page-main">
            <h2>Wellcome {JSON.parse(sessionStorage.currentUser).userData.username}</h2>
            <BalanceChart {...{ loadingTable, userBalance }} />
            <BalanceTable {...{
                loadingTable,
                setLoadingTable,
                userBalance,
                setUserBalance,
                logedFlag,
                setLogedFlag,
                setLoginwindow
            }} />

        </div>

    )
}
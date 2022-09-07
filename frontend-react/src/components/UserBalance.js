import { useState } from "react";
import BalanceChart from "./balanceChart/BalanceChart";
import BalanceTable from "./balanceTable/BalanceTable";

export default function UserBalance() {
    const [loadingTable, setLoadingTable] = useState(true);
    const [userBalance, setUserBalance] = useState([]);


    return (
        <>
            <BalanceChart {...{ loadingTable, userBalance }} />
            <BalanceTable {...{ loadingTable, setLoadingTable, userBalance, setUserBalance }} />

        </>

    )
}
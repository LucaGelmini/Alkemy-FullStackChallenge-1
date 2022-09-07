
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';

import './balanceChart.css'

export default function BalanceChart(props) {

    const { loadingTable, userBalance } = props;
    const [balanceSum, setBalanceSum] = useState();
    const [chartData, setChartData] = useState([]);
    // console.log(userBalance)

    useEffect(() => {
        if (loadingTable) return;
        if (!userBalance.data || userBalance.data.length === 0) return;

        const bs = userBalance.data
            .map((register) => {
                const signMultiplier = (e) => e.type_id === 1 ? 1 : -1;
                return register.amount * signMultiplier(register);
            })
            .reduce((prev, current,) => prev + current)
        setBalanceSum(bs);

        const incomesSum = userBalance.data
            .filter(register => register.type_id === 1)
            .map((register) => register.amount)
            .reduce((prev, current) => prev + current, 0);

        const expensesSum = userBalance.data
            .filter(register => register.type_id === 2)
            .map((register) => register.amount)
            .reduce((prev, current) => prev + current, 0);
        setChartData([incomesSum, expensesSum]);

    }, [userBalance, loadingTable]);


    Chart.register(ArcElement);

    const data = {
        labels: ['Incomes', 'Expenses'],
        datasets: [{
            label: 'Personal Balance',
            data: chartData,
            backgroundColor: [
                '#417135',
                '#762B2A',

            ],
            borderColor: [
                '#1a2930',
                '#1a2930',
            ],
            borderWidth: 1,


        }]
    }
    const options = {
        legend: { display: true },
        onHover: (e, activeElements, chart) => {
            if (activeElements[0]) {
                let ctx = activeElements[0].element.$context;
                let label = chart.data.labels[ctx.dataIndex];
                let value = chart.data.datasets[0].data[ctx.dataIndex];
                chartDataOnHoverRef.current.innerText = label + ': ' + value;
                chartDataOnHoverRef.current.style.visibility = 'visible';
                chartDataOnHoverRef.current.style.zIndex = 1;
                setTimeout(() => {
                    chartDataOnHoverRef.current.style.visibility = 'hidden';
                }, 2000)
            }
        },
        maintainAspectRatio: false,
        cutout: '65%'
    };

    const chartDataOnHoverRef = useRef();

    return (
        <>
            {loadingTable ? <h3>Loading chart...</h3> :
                <div className="balance-chart-container">
                    <div className="balance-sum chart-hover-data" ref={chartDataOnHoverRef} style={{ visibility: 'hidden' }} ></div>
                    <div className="balance-sum">Current balance: ${balanceSum}</div>
                    <Doughnut data={data} options={options} className="doughnut" />

                </div>

            }

        </>
    )
}
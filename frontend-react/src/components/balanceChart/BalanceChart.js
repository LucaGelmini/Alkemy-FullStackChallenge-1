
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';

import './balanceChart.css'

export default function BalanceChart() {
    Chart.register(ArcElement);


    const data = {
        labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
        datasets: [{
            label: '# of Tomatoes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }
    const options = {
        legend: {
            display: true,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 3
            }
        },
        maintainAspectRatio: false
    };


    return (
        <div className="balance-chart-container">

            <Doughnut data={data} options={options} />

        </div>
    )
}
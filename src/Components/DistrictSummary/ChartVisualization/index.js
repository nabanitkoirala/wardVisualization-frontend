import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'EPI-CURVE',
        },

    },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
    labels,
    datasets: [
        {
            lineTension: 0.4,
            label: 'Total Cases',
            data: [1212, 2233, 323, 1224, 235],
            borderColor: '#416EBE',
            backgroundColor: '#416EBE',

        },
        {
            lineTension: 0.4,
            label: 'Recovered',
            data: [1232, 4232, 523, 2226, 328],
            borderColor: '#54AB50',
            backgroundColor: '#54AB50',
        },
        {
            lineTension: 0.4,
            label: 'Death',
            data: [1425, 2445, 455, 6454, 458],
            borderColor: '#F04732',
            backgroundColor: '#F04732',
        },
    ],
};

const ChartVisuaization = () => {
    return (
        <div style={{ width: '80%', marginTop: '30px' }}>
            <h2>Graph Visualization</h2>
            <Line width={800}
                height={window.innerWidth < 500 ? 550 : 250} options={options} data={data} />
        </div>
    )
}


export default ChartVisuaization
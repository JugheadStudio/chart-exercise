import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartThree( {ChartData} ) {
    return(
        <Doughnut data={ChartData}/>
    )
}
export default ChartThree
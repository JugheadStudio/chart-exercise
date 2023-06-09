import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartThree( {ChartData} ) {
    return(
        <Pie data={ChartData}/>
    )
}
export default ChartThree
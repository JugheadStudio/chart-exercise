import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartTwo( {ChartData} ) {
    return(
        <Line data={ChartData}/>
    )
}
export default ChartTwo
import axios from "axios";
import { useEffect } from "react";
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ChartFour() {

let launchName = [];
let launchYear = [];

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches')
    .then((res) => {
      // console.log(res.data)

      for (let i = 0; i < 5; i++) {
          launchName.push(res.data[i].mission_name)
          launchYear.push(res.data[i].launch_year)

      }
      // console.log(launchName);
      // console.log(launchYear);
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])

   const data = {
    labels: launchName,
    datasets: [
      {
        label: 'Launch Year',
        data: launchYear,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Radar data={data}/>
  )
}

export default ChartFour;
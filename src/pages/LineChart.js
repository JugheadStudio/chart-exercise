import { useState } from 'react';
import UserData from '../Data.js';

// Bootstrap
import { Col} from 'react-bootstrap';

// Components
import ChartTwo from '../components/ChartTwo';

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'Users Gained',
      data: UserData.map((data) => data.userGain)
    }]
  });

  return (

		<Col xs={12} lg={6}>
			<div className='rounded-container'>
        <ChartTwo ChartData={userData}/>
			</div>
		</Col>

  );
}

export default LineChart;

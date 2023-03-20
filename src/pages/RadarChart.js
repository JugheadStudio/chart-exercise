// Bootstrap
import { Col} from 'react-bootstrap';

// Components
import ChartFour from '../components/ChartFour';

function RadarChart() {
  return (

		<Col xs={12} lg={6}>
			<div className='rounded-container'>
				<p>For some reason this thing doesn't want to display. Click on the <span>Launch Year</span> lable to <span>disble</span> it, and click it again to <span>enable</span> it, then it works.</p>
				<br />
      			<ChartFour/>
			</div>
		</Col>

  );
}

export default RadarChart;

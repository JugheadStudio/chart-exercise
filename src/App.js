import './App.css';
import { Routes, Route } from 'react-router-dom';

// Bootstrap
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import BarChart from './pages/BarChart';
import LineChart from './pages/LineChart';
import PieChart from './pages/PieChart';
import RadarChart from './pages/RadarChart';
import DoughnutChart from './pages/DoughnutChart.js';

// Components
import BasicNavbar from './components/BasicNavbar';

function App() {
  return (

    <>
      <BasicNavbar/>
      <Container>
        <Row className="justify-content-md-center">

          <Routes>
            <Route path='/' element= { <BarChart /> } />
            <Route path='/LineChart' element= { <LineChart /> } />
            <Route path='/PieChart' element= { <PieChart /> } />
            <Route path='/RadarChart' element= { <RadarChart /> } />
            <Route path='/DoughnutChart' element= { <DoughnutChart /> } />
          </Routes>

        </Row>
      </Container>
    </>

  );
}

export default App;

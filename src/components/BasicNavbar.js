import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function BasicNavbar() {
  return (
    <Navbar className='navbar-bg' expand="lg">
      <Container>
        <Navbar.Brand>Chart Exercise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-container m-auto">
            <NavLink to="/" className='navItem'>Bar Chart</NavLink>
            <NavLink to="/LineChart" className='navItem'>Line Chart</NavLink>
            <NavLink to="/PieChart" className='navItem'>Pie Chart</NavLink>
            <NavLink to="/RadarChart" className='navItem'>Radar Chart</NavLink>
            <NavLink to="/DoughnutChart" className='navItem'>Doughnut Chart</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
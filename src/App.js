import { Navbar, NavbarBrand } from 'reactstrap';
import MenuMedia from './components/MenuMediaComponent';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </div>
      </Navbar>
      <MenuMedia />
    </div>
  );
}

export default App;

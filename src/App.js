import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Search/>
        <Category/>
        <Pages/>
     </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content:flex-start;
align-items: center;
svg{
  font-size: 2rem;;
}

`


export default App;

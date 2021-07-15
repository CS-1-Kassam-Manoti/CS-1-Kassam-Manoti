import styled from 'styled-components'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Article from './components/Article'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import  Home from './components/Home';



function App() {
  return (
    <Container>
      <Router>
        <Route exact path="/" component={Home}/>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>


      </Router>




    
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  
`
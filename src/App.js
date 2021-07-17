import styled from 'styled-components'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Article from './components/Article'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { AuthProvider } from './contexts/AuthContext'


function App() {
  return (
    <AuthProvider>
      <Container>
        <Router>

          <Route exact path="/" component={Home}/>

          <Route exact path="/signup" component={Signup}/>

          <Route exact path="/login" component={Login}/>

        </Router>
      
        
      </Container>
    </AuthProvider>
  );
}

export default App;

const Container = styled.div`
  
`
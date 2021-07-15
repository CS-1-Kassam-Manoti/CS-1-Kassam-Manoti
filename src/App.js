import styled from 'styled-components'
import Article from './components/Article'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  return (
    <Container>

      <Header/>

      <Article/>


      <Register/>

      <Login/>

    
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: blue;
`
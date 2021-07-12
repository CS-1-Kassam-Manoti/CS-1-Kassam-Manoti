import styled from 'styled-components'
import Article from './components/Article'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Container>

      <Header/>

      <Article/>


      <Footer/>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: blue;
  text-align: center;
`
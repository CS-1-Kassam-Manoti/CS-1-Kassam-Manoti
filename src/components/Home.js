import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Article from './Article'
import Footer from './Footer'


function Home() {


    return (
        <Container>
            <Header/>
        
            <Article/>
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

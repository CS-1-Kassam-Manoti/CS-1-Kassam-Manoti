import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Article from './Article'
import Footer from './Footer'

import MContext from './Article'


function Home() {


    return (
        <MContext>
        <Container>
            <Header/>
        
            <Article/>

            <Footer/>
            
        </Container>
        </MContext>
    )
}

export default Home

const Container = styled.div`

`

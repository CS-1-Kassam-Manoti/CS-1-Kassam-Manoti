import React from 'react'
import styled from 'styled-components'

export default function ViewBlog() {

    const blog = localStorage.getItem('blog')
    return (
        <Container>
            {
            

            console.log(blog)
            
            }
        </Container>
    )
}

const Container = styled.div`

`

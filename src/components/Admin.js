import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'

function Admin() {
    return (
        <Container>
            <Header/>
            <LeftBlogSection>

            </LeftBlogSection>

            <RightUsersSection>
                <ul>
                    <li></li>
                </ul>
            </RightUsersSection>
        </Container>
    )
}

export default Admin

const Container = styled.div`

`
const LeftBlogSection = styled.div`

`
const RightUsersSection = styled.div`

`
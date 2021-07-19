import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Footer() {
    return (
        <Container>
            <SocialMedia>
                <Instagram>
                    <AccessTimeIcon/>
                </Instagram>
            </SocialMedia>

        </Container>
    )
}

export default Footer


const Container = styled.section`
    bottom: 0;
    border: 1px solid black;
    margin-bottom: 0;
    height: 100px;
`

const SocialMedia = styled.div`

`
const Instagram = styled.div`

`
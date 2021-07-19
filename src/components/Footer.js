import React from 'react'
import styled from 'styled-components'
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
function Footer() {
    return (
        <Container>
            <SocialMedia>
                <Instagram>
                    <InstagramIcon/>
                </Instagram>
            </SocialMedia>

            <Copyright>
                <CopyrightIcon/>
            </Copyright>

            <LinkedIn>
               <LinkedInIcon/>
            </LinkedIn>

            <Facebook>
               <FacebookIcon/>
            </Facebook>

            <Twitter>
               <TwitterIcon/>
            </Twitter>

            <Phone>
               <PhoneIcon/>
            </Phone>

            <Gmail>
               <MailIcon/>
            </Gmail>



        </Container>
    )
}

export default Footer

const Container = styled.section`
    bottom: 0;
    border: 1px solid black;
    margin-bottom: 0;
    height: 100px;
    margin-top:600px;
`

const SocialMedia = styled.div`

`
const Instagram = styled.div`

`
const Copyright = styled.div`

`
const LinkedIn = styled.div`

`
const Facebook = styled.div`

`
const Twitter = styled.div`

`
const Phone = styled.div`

`
const Gmail = styled.div`

`

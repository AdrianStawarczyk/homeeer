import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/kat.jpg'
import img2 from '../assets/mona.jpg'
import img3 from '../assets/paint.jpg'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
margin: 0 auto;
background-color: ${props => props.theme.body};

`

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: absolute;
top: 1rem;
left: 5%;
z-index: 5;
`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 10%;
margin-left: 10%;
padding-right: 5%;
.h2{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
`

const Right = styled.div`
    width: 50%;
    position: relative;
    margin-right: 10%;
img{
    width: 100%;
    height: auto;
}
.small-img-1{
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
}
.small-img-2{
    width: 40%;
    position: absolute;
    right: 85%;
    bottom: 10%;
}
`


const About = () => {
  return (
    <Section id="fixed-target">
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
            About Us
        </Title>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target" >
            <h2>
                Czym jest platforma Homeeer?<br/><br/>
            </h2>
            <p>
                Platforma Homeeer ułatwia przepływ informacji między osobą planującą budowę 
                domu a biurami architektonicznymi oferującymi projekty, producentami i 
                dostawcami materiałów budowlanych, wykonawcami budowlanymi. <br/><br/>
                Usprawnia proces realizacji budowy domu poprzez dostarczanie wiarygodnych informacji 
                cenowych i technologicznych, przyczyniając się do świadomego wyboru technologii 
                budowlanych przez inwestora.
                Zapewniamy pełną kontrolę nad budżetem i harmonogramem budowy. Inwestorowi 
                dostarczamy narzędzia pozwalające obniżyć koszt inwestycji oraz zapewniające
                dostęp do najnowszych technologi.<br/><br/>
                Dostawcy materiałów i usług budowlanych otrzymują narzędzia pozwalające na 
                dotarcie z ofertą do indywidualnych inwestorów budowlanych.<br/><br/>
                Naszym celem jest budowanie świadomości inwestorów i pomoc w wyborze 
                rozwiązań zwłaszcza tych pozwalających na obniżenie emisji CO2.
            </p>
        </Left>
        <Right >
            <img src={img1} alt='About Us' />
            <img 
            data-scroll
            data-scroll-speed="-2"
            src={img2} className='small-img-1' alt='About Us' />
            <img 
            data-scroll
            data-scroll-speed="5"    
            src={img3}  alt='About Us' className='small-img-2' />
        </Right>
    </Section>
  )
}

export default About;
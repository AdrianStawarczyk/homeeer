import React from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import img1 from '../assets/imgB.jpg'
import img2 from '../assets/imgC.jpg'
import img3 from '../assets/imgD.jpg'
import img4 from '../assets/imgE.jpg'
import img5 from '../assets/imgF.jpg'
import img6 from '../assets/imgG.jpg'
import img7 from '../assets/imgH.jpg'



const Section = styled.section`
min-height: 100vh;
width: 100vw;
height: auto;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;
`

const Left = styled.div`
width: 35%;
background-color: #333333;
color: ${props => props.theme.body};
min-height: 100vh;
z-index: 1;

position: fixed;
left:0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 h2{
     font-weight: 300;
     color: ${props => props.theme.body};
 } 
 p{
     font-size: ${props => props.theme.fontmd};
     width: 80%;
     color: ${props => props.theme.body};
     margin: 0 auto;
 }
`

const Right = styled.div`
position: absolute;
left: 35%;
padding-left: 30%;
height: 100vh;

background-color: #edf0f4;
/* width: 65%; */
display: flex;
justify-content: flex-start;
align-items: center;
h1{
    margin: 0 2 rem;
    width: 5rem;
}
`

const Item = styled.div`
    display: inline-block;
    width: 20rem;
    margin-right: 5rem;
    img{
        width: 100%;
        height: auto;
    }
    h1{
        font-weight: 500;
        text-align: center;
    }
`
const Member = ({img, title = ''}) => {

    return(
        <Item>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

const Team = () => {
gsap.registerPlugin(ScrollTrigger);

const ref = useRef(null);
const horizontalRef = useRef(null);

useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
        t1.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top top',
                end: pinWrapWidth,
                scroller: '.App',
                scrub: true,
                pin: true,
                markers: true,
            },
            height:`$(scrollingElement.scrollWidth)px`,
            ease:'none,'
        })

        t1.to(scrollingElement, {
            scrollTrigger: {
                trigger: scrollingElement,
                start: 'top top',
                end: pinWrapWidth,
                scroller: '.App',
                scrub: true,
                markers: true,
            },
            x: -pinWrapWidth,
            ease:'none,'
        })
    ScrollTrigger.refresh();

    }, 1000);

    return () => {
     
    }
}, [])


  return (
    <Section ref={ref}>
       <Left>
       <h2>
       Kim jesteśmy?<br/><br/>
        </h2>
        <p>
        Jesteśmy zgranym zespołem projektantów, programistów pracujących razem od wielu lat nad tworzeniem i wdrażaniem zaawansowanych webowych systemów informatycznych, wspomagających pracę przedsiębiorstw. Naszą specjalizacją są dedykowane systemy usprawniające specyficzne procesy biznesowe.
        <br></br>
        <br></br>
        Podczas realizacji platformy HomeeeR współpracowaliśmy ściśle z architektami, firmami projektowymi, producentami materiałów budowlanych i dostawcami usług budowlanych.
        <br></br>
        <br></br>
        System Homeeer powstał w ramach projektu pod nazwą „Przeprowadzenie badań i stworzenie inteligentnego środowiska doradczo-analitycznego konsolidującego wymianę doświadczeń branżowych i wspomagającego zarządzanie budową energooszczędnych i ekologicznych inwestycji w oparciu o innowacyjne algorytmy” dofinansowanego w ramach działania 1.2 Działalność badawczo-rozwojowa przedsiębiorstw, Regionalnego Programu Operacyjnego Województwa Mazowieckiego na lata 2014-2020.
        </p>
       </Left>
       <Right ref={horizontalRef}>
            <Member img={img1} title="Musk" />
            <Member img={img2} title="Bezzos" />
            <Member img={img3} title="Trump" />
            <Member img={img4} title="Biden" />
            <Member img={img5} title="Zuckerberg" />
            <Member img={img6} title="Buffet" />
            <Member img={img7} title="Queen Elizabeth" />
       </Right>
    </Section>
  )
}

export default Team
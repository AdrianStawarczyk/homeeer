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
       Kim jeste??my?<br/><br/>
        </h2>
        <p>
        Jeste??my zgranym zespo??em projektant??w, programist??w pracuj??cych razem od wielu lat nad tworzeniem i wdra??aniem zaawansowanych webowych system??w informatycznych, wspomagaj??cych prac?? przedsi??biorstw. Nasz?? specjalizacj?? s?? dedykowane systemy usprawniaj??ce specyficzne procesy biznesowe.
        <br></br>
        <br></br>
        Podczas realizacji platformy HomeeeR wsp????pracowali??my ??ci??le z architektami, firmami projektowymi, producentami materia????w budowlanych i dostawcami us??ug budowlanych.
        <br></br>
        <br></br>
        System Homeeer powsta?? w ramach projektu pod nazw?? ???Przeprowadzenie bada?? i stworzenie inteligentnego ??rodowiska doradczo-analitycznego konsoliduj??cego wymian?? do??wiadcze?? bran??owych i wspomagaj??cego zarz??dzanie budow?? energooszcz??dnych i ekologicznych inwestycji w oparciu o innowacyjne algorytmy??? dofinansowanego w ramach dzia??ania 1.2 Dzia??alno???? badawczo-rozwojowa przedsi??biorstw, Regionalnego Programu Operacyjnego Wojew??dztwa Mazowieckiego na lata 2014-2020.
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
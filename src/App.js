import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { hmrTheme } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import {useRef} from 'react';
import  About  from './sections/About';
import Team from "./sections/Team";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";


function App() {

  const containerRef = useRef(null)
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={hmrTheme}>
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <ScrollTriggerProxy />
      <main className='App' data-scroll-container ref={containerRef}>
          <About />
          <Team /> 
      </main>
     
    </LocomotiveScrollProvider>
    </ThemeProvider>
    </>
  );
}

export default App;

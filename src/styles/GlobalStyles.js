import {createGlobalStyle, creatGlobalStyle} from 'styled-components';
import ('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,700&display=swap');

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0; 
}

body{
    font-family: 'Open Sans', sans-serif;
    background-color: '#edf0f4';
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0; 
}
a{
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;
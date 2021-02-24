import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
    }
html{
    font-size: 62.5%;
}

body{
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
}


#root {
    position: relative;
    margin:0 auto;
    overflow-X: hidden;
    min-height: 100vh;


}
a {
    color: black;
    text-decoration: none;

}


`

export default GlobalStyle;

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-smooth: antialiased;
        -webkit-font-smoothing: antialiased;
    }
html{
    font-size: 62.5%;
    font-smooth: antialiased;

}

body{
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-smooth: antialiased;

    min-height: 100vh;
}


#root {
    position: relative;
    margin:0 auto;
    font-smooth: antialiased;

    overflow-X: hidden;
    min-height: 100vh;


}
a {
    color: black;
    text-decoration: none;
    font-smooth: antialiased;


}


`

export default GlobalStyle;

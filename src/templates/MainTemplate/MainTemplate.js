import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/theme';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';





const MainTemplate = ({children}) =>(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <>
               <Header/>
                {children}
                

            </>
        </ThemeProvider>
    </>
);
MainTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default MainTemplate;
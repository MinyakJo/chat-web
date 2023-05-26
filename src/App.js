// ===== Library =====

import React from "react"
import styled from "styled-components"

// ===== Components =====

import Router from "Router"
import Div from "components/common/Div"

// ===== Module =====

import GlobalFonts from "font/font"
import CommonStyle from "components/style"
import TopBar from "components/container/top_bar/TopBar"

// ===== Code =====

//공통  main container
const AppContainer = styled(Div)`
    width: 100vw;
    height: 100vh; 
`

const MainContainter = styled.main`
    ${ CommonStyle.setFlex("column_top") }
    position: relative;
    width: 100%;
    height: calc( 100% - 120px );
    overflow-x: hidden;
    overflow-y: auto;

    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
    background-color: ${({ backgroundColor }) => {
        return backgroundColor ? CommonStyle.setColor( backgroundColor ) : null
    }};

    ::-webkit-scrollbar{
        width: ${({ scrollbarWidth }) => {
            return scrollbarWidth ? scrollbarWidth : "10px"
        }};
    }
    ::-webkit-scrollbar-thumb{
        border-radius: ${({ scrollbarBorder }) => {
            return scrollbarBorder ? scrollbarBorder : "10px"
        }};
        background-color: ${({ scrollColor }) => {
            return scrollColor ? CommonStyle.setColor( scrollColor ) : CommonStyle.setColor( "grey" )
        }};
    }
    ::-webkit-scrollbar-track{
        border-radius: ${({ scrollbarBorder }) => {
            return scrollbarBorder ? scrollbarBorder : "10px"
        }};
        background-color: ${({ scrollbarBackgroundColor }) => {
            return scrollbarBackgroundColor ? CommonStyle.setColor( scrollbarBackgroundColor ) : CommonStyle.setColor( "light_grey" )
        }};
    }
`

const App = () => {

    return(
        <AppContainer>
            <GlobalFonts />
            <TopBar/>
            <MainContainter>
                <Router/>
            </MainContainter>
        </AppContainer>
    )
}

export default App
// ===== Library =====

import React from "react"
import styled from "styled-components"

// ===== Components =====

import Router from "Router"
import Div from "components/common/Div"

// ===== Module =====

import GlobalFonts from "font/font"
import CommonStyle from "components/style"

// ===== Code =====

//공통  main container
const MainContainter = styled.main`
    ${ CommonStyle.setFlex("column_top") }
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    ::-webkit-scrollbar{
        width: ${({ scrollbarWidth }) => {
            return scrollbarWidth ? scrollbarWidth : "10px"
        }};
    }
    ::-webkit-scrollbar-thumb{
        border-radius: ${({ scrollbarBorder }) => {
            return scrollbarBorder ? scrollbarBorder : "10px"
        }};
        background-color: ${({ scrollbarBackgroundColor }) => {
            return scrollbarBackgroundColor ? scrollbarBackgroundColor : null
        }};
    }

    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
    background-color: ${({ backgroundColor }) => {
        return backgroundColor ? CommonStyle.setColor( backgroundColor ) : null
    }};
`

const App = () => {

    return(
        <Div height="100vh">
            <GlobalFonts />
            <MainContainter>
                <Router/>
            </MainContainter>
        </Div>
    )
}

export default App
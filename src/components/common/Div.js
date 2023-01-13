// ===== Library =====

import styled, {css} from 'styled-components'

// ===== Module =====

import CommonStyle from "components/style"

// ===== Style =====

const Div = styled.div`

    ${props => {
        return props.flex ? CommonStyle.setFlex(props.flex) : null
    }};

    width: ${props => {
        return props.width ? props.width : "fit-content"
    }};
    height: ${props => {
        return props.height ? props.height : "fit-content"
    }};

    margin-top: ${props => {
        return props.marginTop ? props.marginTop : "0px"
    }};
    margin-bottom: ${props => {
        return props.marginBottom ? props.marginBottom : "0px"
    }};
    margin-left: ${props => {
        return props.marginLeft ? props.marginLeft : "0px"
    }};
    margin-right: ${props => {
        return props.marginRight ? props.marginRight : "0px"
    }};

    padding-top: ${props => {
        return props.paddingTop ? props.paddingTop : "0px"
    }};
    padding-bottom: ${props => {
        return props.paddingBottom ? props.paddingBottom : "0px"
    }};
    padding-left: ${props => {
        return props.paddingLeft ? props.paddingLeft : "0px"
    }};
    padding-right: ${props => {
        return props.paddingRight ? props.paddingRight : "0px"
    }};

    background-color: ${props => {
        return props.backgroundColor ? CommonStyle.setColor(props.backgroundColor) : "#00000000"
    }};
    border: ${props => {
        return props.borderColor ? `1px solid ${CommonStyle.setColor(props.borderColor)}` : null
    }};
    border-radius: ${props => {
        return props.radius ? props.radius : null 
    }};

    box-sizing: border-box;

    ${props => {
        if (props.src) {
            return css `
                background-image: url(${props => {
                    return props.src ? props.src : null
                }});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            `
        }
    }}
`

export default Div
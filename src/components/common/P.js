// ===== Library =====

import styled from 'styled-components'

// ===== Module =====

import CommonStyle from "components/style"

// ===== Style =====

const P = styled.p`

    width: fit-content;
    height: fit-content;
    min-height: 0;
    margin: 0;
    padding: 0;

    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : CommonStyle.setColor("black")
    }};
    font-family: ${props => {
        return props.family ? props.family : "regular"
    }};
    font-size: ${props => {
        return props.size ? CommonStyle.setFontSize(props.size) : CommonStyle.setFontSize("medium")
    }};
    font-weight: ${props => {
        return props.weight ? props.weight : "400"
    }};
`

export default P
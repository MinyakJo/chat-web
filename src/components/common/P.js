// ===== Library =====

import styled from 'styled-components'

// ===== Module =====

import CommonStyle from "components/style"

// ===== Style =====

const P = styled.p`

    width: fit-content;
    min-height: 0;
    margin: 0;
    padding: 0;

    color: ${props => {
        return CommonStyle.setColor(props.color)
    }};
    font-family: ${props => {
        return props.family ? props.family : "regular"
    }};
    font-size: ${props => {
        return CommonStyle.setFontSize(props.size)
    }};
    font-weight: ${props => {
        return props.weight ? props.weight : "400"
    }};
`

export default P
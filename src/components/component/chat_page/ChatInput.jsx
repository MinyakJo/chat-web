import React from "react"
import Div from "components/common/Div"
import Input from "components/common/Input"
import Icon from "components/common/Icon"
import styled from "styled-components"
import Img from "components/common/Img"
import right_icon from "../../../svg/angle_small_right.svg"

const InputContainer = styled(Div)`
    flex-basis: calc( 100% - 48px );
`

const ChatInput = ({ onChange, height, padding, backgroundColor, onKeyUp, value }) => {
    return (
        <Div 
            flex="row"
            height={ height ? height : null } 
            backgroundColor={ backgroundColor ? backgroundColor : "white" } 
            padding={ padding ? padding : null }
        >
            <InputContainer padding="10px 20px" backgroundColor="white" radius="50px">
                <Input
                    height="100%"
                    autoComplete="off"
                    onChange={ onChange ? onChange : null }
                    onKeyUp={ onKeyUp ? onKeyUp : null }
                    value={ value }
                />
            </InputContainer>
            <Icon flex="row_center" basis="40px" marginLeft="8px">
                {/* icon 이미지 없어서 대체 */}
                <Img src={ right_icon } id="send"/>
            </Icon>
        </Div>
    )
}

export default ChatInput
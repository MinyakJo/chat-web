import React from "react"
import Icon from "components/common/Icon"
import H1 from "components/common/H1"
import Div from "components/common/Div"
import user_icon from "../../../svg/user_icon.svg"
import Img from "components/common/Img"

const ChatProfile = ({ img, role }) => {
    return (
        <>
            {
                role === "user" ?
                <Div flex="row_end">
                    {/* 프로필 이름 */}
                    <Div width="fit-content" marginRight="8px">
                        <H1 color="white">
                            { role ? role : null }
                        </H1>
                    </Div>
                    {/* 프로필 사진 */}
                    <Icon width="50px" backgroundColor="light_purple" radius="50%">
                        {/* 아이콘 크기 조절을 위한 패딩 */}
                        <Div padding="25%">
                            <Img src={ img ? img : user_icon } />
                        </Div>
                    </Icon>
                </Div>:
                role === "assistant" ?
                <Div flex="row">
                    {/* 프로필 사진 */}
                    <Icon width="50px" backgroundColor="light_purple" radius="50%">
                        {/* 아이콘 크기 조절을 위한 패딩 */}
                        <Div padding="25%">
                            <Img src={ img ? img : user_icon } />
                        </Div>
                    </Icon>
                    {/* 프로필 이름 */}
                    <Div width="fit-content" marginLeft="8px">
                        <H1 color="white">
                            { role ? role : null }
                        </H1>
                    </Div>
                </Div>:
                <></>
            }
        </>
    )
}

export default ChatProfile
import React from "react"
import Div from "components/common/Div"
import noori_icon from "../../../svg/noori_chat_icon.svg"
import Img from "components/common/Img"
import ChatLoader from "./ChatLoader"

const ChatProfile = ({ img, loading }) => {
    return (
        <Div flex="column_between" width="fit-content" height="100%" marginRight="22px">
            <div/>
            <Div>
                {
                    loading &&
                    <ChatLoader width="11px"/>
                }
                {/* 프로필 사진 */}
                <Div width="170px" height="153px">
                    <Img src={ img ? img : noori_icon } />
                </Div>
            </Div>
        </Div>
    )
}

export default ChatProfile
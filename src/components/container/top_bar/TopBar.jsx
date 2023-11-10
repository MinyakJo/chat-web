import React from "react"
import Div from "components/common/Div"
import noori_icon from "../../../svg/noori_top_bar_icon.svg"
import styled from "styled-components"
import CommonStyle from "components/style"
import Img from "components/common/Img"
import H1 from "components/common/H1"
import Button from "components/common/Button"
import { useRecoilValue } from "recoil"
import { topCurrentSelectState } from "recoil/topRecoil"

const TopBarContainer = styled.nav`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0px 48px;
    height: 120px;

    background-color: ${({ backgroundColor }) => {
        return backgroundColor ? `${ CommonStyle.setColor( backgroundColor ) }` : null
    }};
`

const NooriIcon = styled(Div)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 53px;
    aspect-ratio: 1.08 / 1;
`

const MenuContainer = styled(Div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 223px;
    height: 60px;
`

const ButtonContainer = styled(Div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;
    padding: 0px 12px;

    button{
        height: fit-content
    }

    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( borderBottom ) }` : `3px solid ${ CommonStyle.setColor( "none" ) }`
    }};
`

const Title = styled(H1)`
    white-space: nowrap;
`

const TopBar = ({ backgroundColor }) => {

    //var
    const menuList = [
        { value: "NOORI", id: "noori" },
        { value: "ECODE-IN", id: "ecode_in", link: "https://ecode-in.com/15" },
        { value: "STORE", id: "store", link: "https://smartstore.naver.com/ecode-in" }
    ]

    //recoil
    const topCurrentSelect = useRecoilValue( topCurrentSelectState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch(type){
            case "top":
                const topIndex = Number( basic.split( "_" )[ 1 ] )
                
                if( !isNaN( topIndex ) ) {
                    if( menuList[ topIndex ]?.link ) window.open( menuList[ topIndex ].link )
                }
                return
            default:
                return
        }
    }
 
    return (
        <TopBarContainer backgroundColor={ backgroundColor ? backgroundColor : "green" }>
            {/* logo */}
            <Div flex="row" width="fit-content">
                {/* 누리 아이콘 */}
                <NooriIcon marginRight="24px">
                    <Img src={ noori_icon }/>
                </NooriIcon>
                <Title color="white" weight="700" size="medium4">
                    AI 환경튜터 NOORI
                </Title>
            </Div>

            {/* menu */}
            <Div flex="row_center" onClick={ onClickEvent }>
                {
                    menuList && menuList.map( ( e, i ) =>
                        <MenuContainer key={ `top_${ i }` }>
                            <ButtonContainer borderBottom={ e.id === topCurrentSelect ? "light_green" : null }>
                                <Button 
                                    id={ `top_${ i }` } 
                                    color={ e.id === topCurrentSelect ? "light_green" : "white" } 
                                    family={ e.id === topCurrentSelect ? null : "thin" } 
                                    size="medium" 
                                    weight="400"
                                >
                                    { e.value }
                                </Button>
                            </ButtonContainer>
                        </MenuContainer>
                    )
                }
            </Div>
        </TopBarContainer>
    )
}

export default TopBar
// ===== Library =====

import { css } from 'styled-components'

// ===== Code =====

const setFontSize = (value) => {

    const font_size = {
        "xxx_small": "9px",
        "xx_small": "10px",
        "x_small": "11px",
        "x_small2": "12px",
        "x_small3": "13px",
        "x_small4": "14px",
        "small": "15px",
        "small2": "16px",
        "small3": "17px",
        "small4": "18px",
        "medium": "20px",
        "medium2": "22px",
        "medium3": "24px",
        "medium4": "26px",
        "large": "28px",
        "large2": "30px",
        "large3": "32px",
        "large4": "34px",
        "x_large": "36px",
        "xx_large": "38px",
        "xxx_laege": "40px"
    }

    if(value === "xxx_small") return font_size.xxx_small
    else if(value === "xx_small") return font_size.xx_small
    else if (value === "x_small") return font_size.x_small
    else if (value === "x_small2") return font_size.x_small2
    else if (value === "x_small3") return font_size.x_small3
    else if (value === "x_small4") return font_size.x_small4
    else if (value === "small") return font_size.small
    else if (value === "small2") return font_size.small2
    else if (value === "small3") return font_size.small3
    else if (value === "small4") return font_size.small4
    else if (value === "medium") return font_size.medium
    else if (value === "medium2") return font_size.medium2
    else if (value === "medium3") return font_size.medium3
    else if (value === "medium4") return font_size.medium4
    else if (value === "large") return font_size.large
    else if (value === "large2") return font_size.large2
    else if (value === "large3") return font_size.large3
    else if (value === "large4") return font_size.large4
    else if (value === "x_large") return font_size.x_large
    else if (value === "xx_large") return font_size.xx_large
    else if (value === "xxx_large") return font_size.xxx_large
}

const setColor = (value) => {

    const color = {
        "white": "#FFFFFF",
        "black": "#000000",
        "none": "#00000000",
        "purple": "#8E78FF",
        "light_purple": "#E2DCFE",
        "chat_bar": "#C7BFEE",
        "green": "#3B8600",
        "light_green": "#70FF00",
        "light_washed_green": "#9BD75F",
        "grey": "#D1D1D1",
        "grey2": "#BFBFBF",
        "grey3": "#A6A6A6",
        "light_grey": "#F2F2F2",
        "light_yellow": "#FCFFD7B2"
    }

    if (value === "white") return color.white
    else if (value === "black") return color.black
    else if (value === "grey") return color.grey
    else if (value === "none") return color.none
    else if (value === "purple") return color.purple
    else if (value === "light_purple") return color.light_purple
    else if (value === "chat_bar") return color.chat_bar
    else if (value === "green") return color.green
    else if (value === "light_green") return color.light_green
    else if (value === "light_washed_green") return color.light_washed_green
    else if (value === "grey") return color.grey
    else if (value === "grey2") return color.grey2
    else if (value === "grey3") return color.grey3
    else if (value === "light_grey") return color.light_grey
    else if (value === "light_yellow") return color.light_yellow
}

const setFlex = (value) => {

    const flex = {
        "row": css`
            display: flex;
            align-items: center;
        `,
        "row_top": css`
            display: flex;
        `,
        "row_center": css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        "row_end": css`
            display: flex;
            justify-content: right;
            align-items: center;
        `,
        "row_between": css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `,
        
        "column": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
        `,
        "column_top": css`
            display: flex;
            flex-direction: column;
        `,
        "column_center": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `,
        "column_between": css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }

    if (value === "row") return flex.row
    else if (value === "row_top") return flex.row_top
    else if (value === "row_center") return flex.row_center
    else if (value === "row_end") return flex.row_end
    else if (value === "row_between") return flex.row_between
    else if (value === "column") return flex.column
    else if (value === "column_top") return flex.column_top
    else if (value === "column_center") return flex.column_center
    else if (value === "column_between") return flex.column_between
}

const CommonStyle = { setFontSize, setColor, setFlex }

export default CommonStyle
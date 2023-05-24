// ===== Library =====

import { css } from 'styled-components'

// ===== Code =====

const setFontSize = (value) => {

    const font_size = {
        "extra_small": "11px",
        "small": "14px",
        "medium": "18px",
        "medium_large": "22px",
        "large": "28px",
        "extra_large": "40px"
    }

    if (value === "extra_small") return font_size.extra_small
    else if (value === "small") return font_size.small
    else if (value === "medium") return font_size.medium
    else if (value === "medium_large") return font_size.medium_large
    else if (value === "large") return font_size.large
    else if (value === "extra_large") return font_size.extra_large
}

const setColor = (value) => {

    const color = {
        "white": "#FFFFFF",
        "black": "#000000",
        "grey": "#E5E5E5",
        "none": "#00000000",
        "purple": "#8E78FF",
        "light_purple": "#E2DCFE",
        "chat_bar": "#C7BFEE"
    }

    if (value === "white") return color.white
    else if (value === "black") return color.black
    else if (value === "grey") return color.grey
    else if (value === "none") return color.none
    else if (value === "purple") return color.purple
    else if (value === "light_purple") return color.light_purple
    else if (value === "chat_bar") return color.chat_bar
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
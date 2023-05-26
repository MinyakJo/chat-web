// ===== Library =====

import { createGlobalStyle } from "styled-components";

// ===== Files =====

import NotoSans from "font/NotoSansKR-Regular.otf"
import BlackHanSans from "font/BlackHanSans-Regular.ttf"
import NotoSansThin from "font/NotoSansKR-Thin.otf"

// ===== Style =====

const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "regular";
        src: url(${ NotoSans });
    }

    @font-face {
        font-family: "bold";
        src: url(${ BlackHanSans });
    }

    @font-face {
        font-family: "thin";
        src: url(${ NotoSansThin });
    }
`

export default GlobalFonts
import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "h2": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "h3": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "h4": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "h5": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "h6": {
        "fontFamily": "'Montserrat', Arial, monospace"
    },
    "div": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "p": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "ol": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "ul": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "li": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "a": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "button": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "input": {
        "fontFamily": "'PT Sans', Arial, monospace"
    },
    "code": {
        "fontFamily": "monospace"
    },
    "pre": {
        "fontFamily": "monospace"
    },
    "span": {
        "fontFamily": "inherit"
    },
    "b": {
        "fontFamily": "inherit"
    },
    "i": {
        "fontFamily": "inherit"
    },
    "output": {
        "border": "1px solid #eee",
        "borderRadius": 2,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 1,
        "marginBottom": 40,
        "fontSize": 1.2,
        "lineHeight": 1.5,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "overflowX": "auto"
    },
    "input-group": {
        "paddingBottom": 10
    }
});
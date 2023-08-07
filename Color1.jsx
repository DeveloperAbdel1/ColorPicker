// eslint-disable-next-line no-unused-vars
import React from "react"
// import {Picker} from './'


const Color = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <div className = {props.color} onClick={() => props.selectColor(props.color)} />
    )
}

export default Color

import React from 'react'

export default function Button(props:buttonprops) {
  return (
    <>
    <button disabled = {props.disabled} type={props.type} className={props.className} onClick={props.onClick}>{props.children}</button>
    </>
  )
}

interface buttonprops {
    children : React.ReactNode
    onClick?() : void
    type : "button" | "submit"
    disabled : boolean
    className : string
}

Button.defaultProps = {
    type : "button",
    disabled : false,
    className : 'btn btn-primary'
}
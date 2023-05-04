import React from 'react'

export default function Button(props:buttonprops) {
  return (
    <>
    <button disabled = {props.disabled} type={props.type} className='btn btn-primary' onClick={props.onClick}>{props.children}</button>
    </>
  )
}

interface buttonprops {
    children : React.ReactNode
    onClick?() : void
    type : "button" | "submit"
    disabled : boolean
}

Button.defaultProps = {
    type : "button",
    disabled : false
}
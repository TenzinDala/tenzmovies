import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function TextField(props: textField) {
  return (
    <>
    <div className="mb-3">
        <label htmlFor={props.text}>{props.displayName}</label>
        <Field placeholder = "Enter your name" id = {props.text} name = {props.text} className="form-control"></Field>
        <ErrorMessage name={props.text}>
            {msg=><div className='text-danger'>{msg}</div>}
        </ErrorMessage>
    </div>

    </>
  )
}

interface textField {
    text : string
    displayName? : string
}

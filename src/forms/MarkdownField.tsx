import { Field, useFormikContext } from 'formik';
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import "./MarkdownField.css"

export default function MarkdownField(props: MarkDownProps) {
    const {values} = useFormikContext<any>()
  return (
    <div className='mb-3 form-markdown'>
        <div>
            <label htmlFor="">
            {props.displayName}
            </label>
            <div>
                <Field name={props.field} as="textarea" className="form-textarea"></Field>
            </div>
        </div>
        <div>
            <label htmlFor="">{props.displayName} (preview) :</label>
            <div className='markdown-container'>
                <ReactMarkdown>{values[props.field]}</ReactMarkdown>

            </div>
        </div>
    </div>
  )
}

interface MarkDownProps {
    displayName : string;
    field       : string
}
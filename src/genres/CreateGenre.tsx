import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import * as Yup from 'yup'
import TextField from '../forms/TextField'

export default function CreateGenre() {
  return (
    <>
    <h3>creating Genre</h3>

    <Formik initialValues={{
      name : "",
    }}
    onSubmit={async value => {
      await new Promise(r => setTimeout(r,1));
      console.log(value)
    }}
    validationSchema={Yup.object({
      name: Yup.string().required("This field is required!!!").min(2, 'Too Short!').max(50, 'Too Long!').FirstLetterUppercase()
      
    })}
    >
      {(formikProps) => (
        <Form action="">
        <TextField displayName="Name" text='name'/>
        <Button disabled ={formikProps.isSubmitting} type='submit'>Save Changes</Button>
        <Link to={'/genres'} className='btn btn-primary'>Cancel</Link>

      </Form>
      )}
      
    </Formik>
    </>
  )
}

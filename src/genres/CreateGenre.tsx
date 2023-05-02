import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'

export default function CreateGenre() {
  return (
    <>
    <h3>creating Genre</h3>

    <Formik initialValues={{
      name : "",
    }}
    onSubmit={value => {
      console.log(value)
    }}
    >
      <Form action="">
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <Field placeholder = "Enter your name" id = "name" name = 'name' className="form-control"></Field>
        </div>
        <Button type='submit'>Save Changes</Button>
        <Link to={'/genres'} className='btn btn-primary'>Cancel</Link>

      </Form>
    </Formik>
    </>
  )
}

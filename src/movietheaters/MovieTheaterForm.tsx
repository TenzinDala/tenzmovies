import React from 'react'
import { movieTheaterCreationDTO } from './movietheater.model'
import { Form, Formik, FormikHelpers } from 'formik'
import TextField from '../forms/TextField'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import * as Yup from "yup"

export default function MovieTheaterForm(props: MovieTheaterFormInterface) {
  return (
    <>
    <Formik
    initialValues={props.model}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
        name : Yup.string().required("This field is required").FirstLetterUppercase()
    })}
    
    >
        {(formikProps) => (
            <Form>
                <TextField displayName='Name' text='name'/>

                <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                <Link className="btn btn-secondary" to="/movieTheaters">Cancel</Link>
            </Form>
        )}
    </Formik>
    </>
  )
}

interface MovieTheaterFormInterface {
    model : movieTheaterCreationDTO;
    onSubmit(values:movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void  
}
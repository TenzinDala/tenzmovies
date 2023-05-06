import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import TextField from './TextField'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import { ActorCreationDTO } from './actorsmodel'
import * as Yup from 'yup'
import DateField from './DateField'
import ImageField from './ImageField'

export default function ActorForm(props: ActorFormProps) {
  return (
    <>
    <Formik 
    initialValues={props.model}
    onSubmit = {props.onSubmit}

    validationSchema={Yup.object({
        name : Yup.string().required('This field is required').FirstLetterUppercase(),
        dateOfBirth : Yup.string().nullable().required("This Field is required")
    })}
    >
        {(formikProps) => (
            <Form>
                <TextField displayName='name' text = "name"/>
                <DateField displayName='Date of Birth' field='dateOfBirth'/>
                <ImageField displayName='Picture' field="picture" imageURL={props.model.PictureURL}/>
                <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                <Link to="/actors" className='btn btn-secondary'>Cancel</Link>
            </Form>
        )}
    </Formik>
    </>
  )
}

interface ActorFormProps {
    model : ActorCreationDTO
    onSubmit(value: ActorCreationDTO, action: FormikHelpers<ActorCreationDTO>):void
}

import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react'
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { genreCreationDTO } from './genres.model';


export default function GenreForm(props: GenreFormProps) {
  return (
    <>
    <Formik initialValues={props.model}
      onSubmit={props.onSubmit}
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

interface GenreFormProps {
    model : genreCreationDTO;
    onSubmit(values : genreCreationDTO, action: FormikHelpers<genreCreationDTO>) : void
}

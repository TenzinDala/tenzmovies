import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import TextField from '../forms/TextField'
import GenreForm from './GenreForm'

export default function CreateGenre() {
  return (
    <>
    <h3>creating Genre</h3>
    <GenreForm model = {{name : ""}} onSubmit={async value => {
        await new Promise(r => setTimeout(r,1));
        console.log(value)
      }}/>
    </>
  )
}

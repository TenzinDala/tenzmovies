import { Field, Form, Formik } from 'formik'
import React from 'react'
import { genreDTO } from '../genres/genres.model'
import Button from '../utils/Button'

export default function FilterMovies(props : filtermoviesprop) {
  const initialValues : filtermoviesprop = {
    title            : "",
    genreID          : 0,
    upcomingReleases : false,
    inTheaters       : false
  }

  const genres : genreDTO[] = [{id:1,name:'Anime'},{id:2,name:'Drama'},{id:3,name:'Action'}]
  return (
    <>
    <h3>FilterMovies</h3>
    <Formik initialValues = {initialValues}
      onSubmit={values => console.log(values)}
    >
      {(formikProps)=> (
        <Form>
          <div className="row gx-3 align-items-center">
            <div className="col-auto">
              <input type="text" className='form-control' id='title' placeholder='title of the movie' {...formikProps.getFieldProps("title")}/>
            </div>
            <div className="col-auto">
              <select  className='form-select' id="" {...formikProps.getFieldProps("genreID")}>
                <option value="0">--Choose a Genre</option>
                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
              </select>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field className="form-check-input" id="upcomingReleases" name ="upcomingReleases" type='checkbox'/>
                <label className='form-check-label' htmlFor="upcomingReleases">UpcomingReleases</label>
              </div>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field className="form-check-input" id="inTheaters" name ="inTheaters" type='checkbox'/>
                <label className='form-check-label' htmlFor="inTheaters">inTheaters</label>
              </div>
            </div>
            <div className="col-auto">
              <Button className='btn btn-primary' onClick={()=>formikProps.submitForm()}>Filter</Button>
              <Button className='btn btn-danger ms-3' onClick={() => formikProps.setValues(initialValues)}>Clear</Button>
            </div>

          </div>
        </Form>
      )}

    </Formik>
    </>
  )
}

interface filtermoviesprop {
  title? : string;
  genreID? : number;
  upcomingReleases? : boolean;
  inTheaters? : boolean;
}


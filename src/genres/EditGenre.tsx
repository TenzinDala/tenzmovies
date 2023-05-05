import React from 'react'
import { useParams } from 'react-router-dom'
import GenreForm from './GenreForm';

export default function EditGenre() {
  const {id} :any = useParams()
  return (
    <>
    <div>Edit Genre</div>
    <GenreForm model = {{name : "Action"}} onSubmit={async value => {
        await new Promise(r => setTimeout(r,1));
        console.log(id)
        console.log(value)
      }}/>

    </>
  )
}

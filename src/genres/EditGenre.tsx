import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditGenre() {
  const {id} :any = useParams()
  return (
    <>
    <div>Edit Genre</div>
    The id is {id}
    </>
  )
}

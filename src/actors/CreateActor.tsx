import React from 'react'
import ActorForm from '../forms/ActorForm'

export default function CreateActor() {
  return (
    <>
    <div>CreateActor</div>
    <ActorForm model = {{name: "", dateOfBirth : undefined}} onSubmit={value => console.log(value)}/>
    </>
  )
}

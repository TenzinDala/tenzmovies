import React from 'react'
import ActorForm from '../forms/ActorForm'

export default function EditActor() {
  return (
    <>
    <div>EditActor</div>
    <ActorForm model = {{name: "Tanjiro Kamada", dateOfBirth : new Date("1996-06-01T00:00:00"),
    PictureURL: "https://www.looper.com/img/gallery/tanjiros-greatest-power-in-demon-slayer-isnt-what-you-think/l-intro-1620874317.jpg"
  }} onSubmit={value => console.log(value)}/>
    </>
  )
}

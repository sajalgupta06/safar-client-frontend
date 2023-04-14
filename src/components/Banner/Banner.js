import React from 'react'

export default function Banner(props) {

    const {image} = props
  return (
    <>
    <section className='banner container section'>

    <div className='imgDiv'>
        <img className='image' src={image.src}></img>
    </div>

    </section>
    
    </>
  )
}

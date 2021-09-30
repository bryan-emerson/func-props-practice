import React from 'react'
import './style.css'

export default function Child(props) {
  console.log(props.plus)
  return (
    <div className='child'>
      <p>child</p>
      <button className='button' onClick={ props.plus }>pressy pressy up</button>
      <button className='button' onClick={ props.minus }>pressy pressy down</button>
    </div>
  )
}
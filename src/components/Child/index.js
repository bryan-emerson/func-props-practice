import React from 'react'

export default function Child(props) {
  console.log(props.plus)
  return (
    <div>
      <button onClick={ props.plus }>pressy pressy up</button>
      <button onClick={ props.minus }>pressy pressy down</button>
    </div>
  )
}
import Child from '../Child/index.js'
import React, { useState } from 'react'
import './style.css'

export default function Parent() {
  let [count, setCount] = useState(1);

  let increment = ()=> {
    setCount(count +1)
  }

  let decrement = () => {
    setCount(count -1 )
  }

  return (
    <div className='parent'>
      <p>taco party...how many tacos?!</p>
      {count}
      <Child plus={increment} minus={decrement}/>
    </div>
  )
}

import Child from '../Child/index.js'
import React, { useState } from 'react'

export default function Parent() {
  let [count, setCount] = useState(1);

  let increment = ()=> {
    setCount(count +1)
  }

  return (
    <div>
      <p>taco party...how many tacos?!</p>
      {count}
      <Child plus={increment}/>
    </div>
  )
}

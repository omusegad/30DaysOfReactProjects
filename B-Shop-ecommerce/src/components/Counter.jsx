import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/countSlice'

export default function Counter() {
    const count = useSelector(state => state.counter)
    console.log(count)
    const dispatch = useDispatch()
   
  return (
    <>
        <h4 className="counter text-center">
           <button class="btn btn-outline-primary" onClick={() => dispatch(decrement())}>Decrement</button> { count.value } <button className='btn btn-outline-secondary' onClick={() => dispatch(increment())}> Increment</button>
        </h4>
    </>
  )
}

import React, { useState } from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice';

function Counter() {
    const [amount,setAmount] = useState(0);
    const count = useSelector(state=>state.counterReducer.count);
    const dispatch = useDispatch()

    const handleIncrementByAmount = () => {
        if(amount){
            dispatch(incrementByAmount(amount))
        }else{
            alert("Enter a Valid Number!!!")
        }
    }
  return (
    <div className='root'>
        <div className='counter-section'>
            <h1 className='count-display'>{count}</h1>
            <div className='btns-section'>
            <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-warning">Decrement</button>
            <button onClick={()=>dispatch(reset())} type="button" className="btn btn-danger">Reset</button>
            <button onClick={()=>dispatch(increment ())} type="button" className="btn btn-primary">Increment</button>
            </div>
            <div className='inpt-section'>
                <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Enter the Amount to be incremented!!!' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-md"/>
                <button onClick={handleIncrementByAmount} type="button" className="btn btn-success ms-3">Increment by Amount</button>
            </div>
        </div>
    </div>
  )
}

export default Counter
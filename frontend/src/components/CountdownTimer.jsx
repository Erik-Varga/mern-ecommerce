import React from 'react'
import Countdown from 'react-countdown';

const CountdownTimer = () => {
    const countdownDate = new Date("April 14, 2025")
  return (
    <div className='flex flex-col items-center justify-center border py-2 px-4 m-2 rounded'>
        Days:Hrs:Min:Sec
        <Countdown date={countdownDate} />
    </div>
  )
}

export default CountdownTimer
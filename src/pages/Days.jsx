import React from 'react'
import Day1 from '../practice/days/Day1'
import Day2 from '../practice/days/Day2'
import Day3 from '../practice/days/Day3'

function Days() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
        <Day1 />
        <Day2 />
        <Day3 />
    </div>
  )
}

export default Days
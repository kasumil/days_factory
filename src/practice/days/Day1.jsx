import React from 'react'
import Button from '../../components/practice/atoms/Button'

function Day1() {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
    </div>
  )
}

export default Day1
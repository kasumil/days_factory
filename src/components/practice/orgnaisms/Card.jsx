import React from 'react'
import Button  from '../atoms/Button'
import Description from '../atoms/Description'
import IconTitles from '../molecules/IconTitles'

function Card({ icon, title, description, buttonLabel, variant }) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-3 bg-white rounded-lg p-4 hover:bg-gray-50 hover:shadow-lg transition-all duration-300'>
        <IconTitles icon={icon} title={title} />
        <Description description={description} />
        <Button variant={variant}>{buttonLabel}</Button>
    </div>
  )
}

export default Card
import React from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'

function IconTitles({ icon, title }) {
  return (
    <div className='flex flex-col items-center gap-1 text-center'>
        <Icon icon={icon} />
        <Title title={title} />
    </div>
  )
}

export default IconTitles
import React from 'react'
import Tags from './Tags'
import Feed from './Feed'

const Body = () => {
  return (
    <div className='w-full'>
        <Tags />
        <Feed position="horizontal" />
    </div>
  )
}

export default Body
import React from 'react';
import { tagList } from '../staticLink';

const Tags = () => {
  return (
    <div>
        <ul className='flex overflow-hidden'>
        {tagList.map((item) => {
            return <li key={item} className='bg-gray-200 px-2 py-1 rounded-md mr-3'>{item}</li>
        })}   

        </ul>
    </div>
  )
}

export default Tags
import React from 'react';
import { sidebarList } from '../staticLink';
import { useSelector } from 'react-redux';

const SideBar = () => {

  const sidebarToggle = useSelector(store => store.appSlice.sidebar);

  return sidebarToggle && (
    <div className='w-1/6'>
        <ul className='ml-3'>
          {sidebarList.map((item) => {
            return <li key={item} className="px-3 py-4">{item}</li>
          })}
          
        </ul>
    </div>
  )
}

export default SideBar
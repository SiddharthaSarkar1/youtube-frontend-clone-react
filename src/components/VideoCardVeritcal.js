import React from 'react';
import { Link } from 'react-router-dom';

const VideoCardVerticle = ({data}) => {
    const { snippet, id } = data;
    // console.log(snippet);
    const { title, channelTitle, thumbnails } = snippet;
  return (
    <Link to={`/watch?v=${id}`} className='w-full p-3'>
    <div className='grid grid-cols-2 gap-2'>
      <div className="col-span-1">
        <img className='rounded-xl' src={thumbnails.medium.url} alt="video-thumbnails" />
      </div>
      <div className="col-span-1">
      <h5 className='font-medium text-sm mt-2'>{title}</h5>
        <p className='text-xs mt-2 text-grey-500'>{channelTitle}</p>
      </div>
      
    </div>
    </Link>
  )
}

export default VideoCardVerticle;
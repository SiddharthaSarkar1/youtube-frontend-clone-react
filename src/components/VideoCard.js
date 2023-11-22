import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({data}) => {
    const { snippet, id } = data;
    // console.log(snippet);
    const { title, channelTitle, thumbnails } = snippet;
  return (
    <Link to={`/watch?v=${id}`} className='w-1/4 p-3'>
    <div>
        <img className='rounded-xl' src={thumbnails.medium.url} alt="video-thumbnails" />
        <h5 className='font-medium text-sm mt-2'>{title}</h5>
        <p className='text-xs mt-2 text-grey-500'>{channelTitle}</p>
    </div>
    </Link>
  )
}

export default VideoCard;
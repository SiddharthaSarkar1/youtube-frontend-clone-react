import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { addVideos } from '../store/videoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { openSidebar } from '../store/appSlice';

const Feed = () => {

    const videoList = useSelector(store => store.videoSlice.videoList);

    const dispatch = useDispatch();

    // const [videoList, setVideoList] = useState([]);

    const fetchVideos = async () => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data);
        dispatch(addVideos(data.items))
        // setVideoList(data.items);
    }

    useEffect(() => {
        dispatch(openSidebar());
        !videoList.length && fetchVideos();
    }, [])
    

  return (
    <div className="flex flex-wrap mt-4">
        {videoList.map((item) => (
             <VideoCard key={item.etag} data={item} />
        ))}
        
    </div>
  )
}

export default Feed;
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { closeSidebar } from "../store/appSlice";


const VideoPlayer = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const videoId = params.get('v');

  useEffect(() => {
    dispatch(closeSidebar());
  }, [])
  

  return (
    <div className="p-4">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;

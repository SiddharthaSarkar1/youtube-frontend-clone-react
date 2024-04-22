import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/appSlice";
import VideoControls from "./VideoControls";
import Comment from "./comment";
import Feed from "./Feed";
import Tags from "./Tags";
import commentsData from "../data/comments.js";
import ChannelInfo from "./ChannelInfo.jsx";
import { updateComents } from '../utils/helper.js';

const VideoPlayer = () => {
  const theVideoList = useSelector((state) => state.videoSlice);
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const [selectedVideo, setSelectedVideo] = useState();
  const videoId = params.get("v");

  const [comments, setComments] = useState(commentsData);



  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updateComents(comments, targetId, newComment);
    setComments(newUpdatedComments);
  }
  

  // console.log(params);
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  useEffect(() => {
    theVideoList.videoList.map((video) => {
      if (video.id === videoId) {
        setSelectedVideo(video);
      }
    });
  });

  // console.log(selectedVideo);

  return (
    <div className="w-full grid grid-cols-12 gap-1">
      <div className="p-4 col-span-8 max-h-72">
        <iframe
          className="rounded-lg"
          width="100%"
          height="440"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="text-2xl text-bold my-2">
          {selectedVideo?.snippet.title}
        </h1>
        <ChannelInfo selectedVideo={selectedVideo} />
        <VideoControls selectedVideo={selectedVideo} />
        <div className="bg-gray-300 mt-3 rounded-sm">
          <div className="p-1">
            <Comment commentsData={comments} addNewReply={addNewReply} />
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="p-1">
          <Tags />
          <Feed position={"verticle"} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

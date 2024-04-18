import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/appSlice";
import VideoControls from "./VideoControls";
import Comment from "./comment";
import Feed from "./Feed";
import Tags from "./Tags";

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const videoId = params.get("v");
  // console.log(params);
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

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
        <VideoControls />
        <div class="m-2">
        <div class="p-1">
          <Comment />
        </div>
      </div>
      </div>
      <div class="col-span-4">
        <div class="p-1">
          <Tags />
          <Feed position={"verticle"} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

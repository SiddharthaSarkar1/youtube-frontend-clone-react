import React, { useState } from "react";
import {
  ThumbUpIcon,
  ThumbDownIcon,
  ShareIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const VideoControls = ({ selectedVideo }) => {
  const [dummyLike, setDummyLike] = useState(10);
  const [dummyDislike, setDummyDislike] = useState(3);

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="w-full flex justify-between space-x-4">
        <button
          onClick={() => {
            setDummyLike(dummyLike + 1);
          }}
          className="flex items-center space-x-2 bg-gray-300 px-3 py-2 rounded-3xl"
        >
          <ThumbUpIcon className="w-6 h-6" />
          {selectedVideo?.statistics?.likeCount}
          <span className="text-sm">Like</span>
        </button>
        <button
          onClick={() => {
            setDummyDislike(dummyDislike + 1);
          }}
          className="flex items-center space-x-2 bg-gray-300 px-3 py-2 rounded-3xl"
        >
          <ThumbDownIcon className="w-6 h-6" />
          {dummyDislike}
          <span className="text-sm">Dislike</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-300 px-3 py-2 rounded-3xl">
          <ShareIcon className="w-6 h-6" />
          <span className="text-sm">Share</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-300 px-3 py-2 rounded-3xl">
          <BookmarkIcon className="w-6 h-6" />
          <span className="text-sm">Save</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-300 px-2 py-2 rounded-full">
          <DotsHorizontalIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoControls;

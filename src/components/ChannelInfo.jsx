import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

const ChannelInfo = ({ selectedVideo }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="flex items-center mt-4 p-4 border-t border-gray-200">
      <div className="flex items-center">
        <img
          src={selectedVideo?.snippet.thumbnails.default.url}
          className="w-12 h-12 rounded-full border-gray-500 text-gray-500"
        />
        <div className="ml-3">
          <p className="font-bold text-lg">
            {selectedVideo?.snippet?.channelTitle}
          </p>
          <p className="text-sm text-gray-500">1M subscribers</p>
        </div>
      </div>
      <div className="ml-auto">
        <button
          onClick={handleSubscribe}
          className={`px-4 py-2 font-bold rounded-3xl ${
            isSubscribed ? "bg-gray-200 text-gray-800" : "bg-red-500 text-white"
          }`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;

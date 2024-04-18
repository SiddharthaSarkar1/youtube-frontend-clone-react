import React from "react";

const Comment = () => {
  return (
    <div className="flex justify-between items-center border border-black p-1 rounded-sm">
      <div>Lorem Ipsum</div>
      <div>
        <span className="text-blue-500 font-mono text-sm m-1 cursor-pointer">
          View Reply
        </span>
        <span className="text-blue-500 font-mono text-sm m-1 cursor-pointer">
          Add Reply
        </span>
      </div>
    </div>
  );
};

export default Comment;

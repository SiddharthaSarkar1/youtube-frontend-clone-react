import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

const CommentItem = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);
  const [addReply, setAddReply] = useState(false);
  return (
    <div className="flex flex-col justify-between border border-black p-2 rounded-sm my-2">
      <div className="flex justify-between my-1 items-center">
        <div className="flex">
          <UserCircleIcon className="h-6 w-6" />
          <div className=" ml-1">
          {comment.comment}
          </div>
          
          </div>
        <div>
          {comment.subComments.length > 0 && (
            <span
              className="text-blue-600 font-mono text-sm m-1 cursor-pointer"
              onClick={() => setShowReply(!showReply)}
            >
              {showReply ? "Hide Reply" : "View Reply"}
            </span>
          )}
          <span className="text-blue-600 font-mono text-sm m-1 cursor-pointer"
          onClick={() => setAddReply(!addReply)}>
            Add Reply
          </span>
        </div>
      </div>
      {/* Implementing recursive approach to render UI recursively */}
      {showReply && <Comment commentsData={comment.subComments} />}
      {addReply && <input className="h-10 p-2 rounded-md border-b-2 border-black outline-none" type="text" placeholder="Enter your comment..." />}
    </div>
  );
};

const Comment = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </>
  );
};

export default Comment;

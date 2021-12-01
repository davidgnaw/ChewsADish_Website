import React, { useState } from "react";
import { timeDifference } from "./GalleryPic";

export default function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.commentsLikerecieved);
  const [isLikedByUser, setIsLikedByUser] = useState(false);
  return (
    <div className="card p-3 mt-2" key={new Date().getTime() * Math.random()}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="user d-flex flex-row align-items-center">
          <img
            src="https://i.imgur.com/ZSkeqnd.jpg"
            width={30}
            className="user-img rounded-circle mr-5"
          />
          <span className="d-block px-3">
            <small className="font-weight-bold">
              {comment.commentsContent}
            </small>
          </span>
        </div>
        <small>
          {timeDifference(new Date(), new Date(comment.commentsCreationdate))}
        </small>
      </div>
      <div className="action d-flex justify-content-between mt-2 align-items-center">
        <div
          className="icons align-items-center"
          onClick={() => {
            if (!isLikedByUser) {
              setIsLikedByUser(true);
              setLikes((p) => p + 1);
            } else {
              setIsLikedByUser(false);
              setLikes((p) => p - 1);
            }
          }}
        >
          <i
            class={`${!isLikedByUser ? "fa fa-heart-o" : "fa fa-heart"}`}
            aria-hidden="true"
            style={{ marginRight: "4px", color: "#E86B62" }}
          ></i>
          {likes}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import data from "./../../data.json";
import { useParams } from "react-router-dom";
import { timeDifference } from "../GalleryPic";
import Comment from "../comment";

export default function SingleGallary() {
  const params = useParams();

  const currGalleryPost = data.find(
    (p) => parseInt(p.postId) === parseInt(params.id)
  );

  const [newComment, setNewComment] = useState("");
  const [currPost, setCurrPost] = useState({});

  useEffect(() => {
    const currPostId = params.postId;
    // Call the API with currPostId to get the single Post
    setCurrPost(currGalleryPost);
  }, [currGalleryPost, params.postId]);

  const handleNewComment = (e) => {
    e.preventDefault();
    const newCommentData = {
      commentsContent: newComment,
      commentsuserId: 12,
      commentsLikerecieved: 0, // initial value
      commentsCreationdate: new Date().toISOString(),
    };
    // call API with newCommentToBeSent and postId to add a new comment
    setNewComment("");
    setCurrPost((p) => {
      const prev = { ...p };
      prev.comment = [newCommentData].concat(prev.comment);
      return prev;
    });
  };

  const handleDeleteComment = (i) => {
    setCurrPost((p) => {
      const prev = { ...p };
      prev.comment.splice(i, 1);
      return prev;
    });
  };

  return (
    <div
      className="container d-flex justify-content-center mt-4"
      style={{ overflow: "hidden" }}
    >
      <div>
        <div className="row">
          <div className="col-sm-8 vh-100">
            <img
              src={currGalleryPost.media}
              className="img-fluid"
              style={{
                maxHeight: "700px",
                objectFit: "contain",
                width: "100%",
                objectPosition: "center",
              }}
              alt={currGalleryPost.content}
            />
          </div>
          <div className="col-sm-4">
            <div
              //   style={{ minHeight: "600px" }}
              className="d-flex align-items-center"
            >
              <div>
                <h3>
                  <small className="text-muted">
                    {currGalleryPost.content}
                  </small>
                </h3>
              </div>
            </div>

            <div>
              <div className="headings d-flex justify-content-between align-items-center mb-3"></div>
              <h2>Comments ({currGalleryPost.comment.length})</h2>

              <div style={{ overflowY: "scroll", maxHeight: "500px" }}>
                <form onSubmit={handleNewComment}>
                  <div class="mb-3">
                    <label class="form-label">Comment:</label>
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      class="form-control"
                    />
                  </div>

                  <button type="submit" class="btn btn-secondary">
                    Submit
                  </button>
                </form>
                {currPost.comment?.map((comment, i) => (
                  <Comment
                    key={new Date().getMilliseconds() * Math.random()}
                    comment={comment}
                    postId={currGalleryPost.postId}
                    handleDelete={handleDeleteComment}
                    commentId={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

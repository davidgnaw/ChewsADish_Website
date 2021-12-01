import React from "react";
import data from "./../../data.json";
import { useParams } from "react-router-dom";
import { timeDifference } from "../GalleryPic";
import Comment from "../comment";

export default function SingleGallary() {
  const params = useParams();
  console.log(params.id);
  const currGalleryPost = data.find(
    (p) => parseInt(p.postId) === parseInt(params.id)
  );
  console.log(currGalleryPost);
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
                <form>
                  <div class="mb-3">
                    <label class="form-label">Comment:</label>
                    <input type="text" class="form-control" />
                  </div>

                  <button type="submit" class="btn btn-secondary">
                    Submit
                  </button>
                </form>
                {currGalleryPost.comment.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

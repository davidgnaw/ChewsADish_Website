import React from 'react';
import './Post.css';
// import CardItem from './Carditem';
// import { Link } from 'react-router-dom';


function GalleryPic() {
  return (
    <section class="main">
      <div class="wrapper">
          <div class="left-col">
              <div class="post">
                  <div class="info">
                      <div class="user">
                          <p class="username">ChewsADish</p>
                      </div>
                  </div>
                  <img src="images/img12.jpg" class="post-image" alt=""/>
                  <div class="post-content">
                      <div class="reaction-wrapper">
                          <img src="images/like.jpeg" class="icon" alt=""/>
                          <img src="images/comment.jpeg" class="icon" alt=""/>
                      </div>
                      <p class="likes">666 likes</p>
                      <p class="description"><span>Shirley Chen </span> Here is my masterpiece!</p>
                      <p class="post-time">5 minutes ago</p>
                  </div>
                </div>
            </div>
          </div>
    </section>
  )
}
export default GalleryPic;

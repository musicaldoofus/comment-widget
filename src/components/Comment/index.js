import React from 'react';
import { Star } from '../RatingsContainer';
import './Comment.css';

const Comment = ({Author, Rating, timestamp, Body}) => {
  const stars = Array.from({length: 5}, (_, i) => <Star small key={i} isActive={Rating > i}/>);
  return (
    <div className="comment">
      <div className="comment-avatar">
        <div className="comment-avatar-img">
          <img src="#" alt=""/>
        </div>
        <div className="comment-avatar-metadata">
          Posted: {timestamp}
          by: {Author}
        </div>
      </div>
      <div className="comment-body">
        <div className="comment-rating">
          {stars}
        </div>
        {Body}
      </div>
    </div>
  )
}

const toCommentBox = (c) => {
  return (
    <Comment
      key={c.CommentId}
      {...c}
    />
  )
}

export default Comment;
export { toCommentBox };
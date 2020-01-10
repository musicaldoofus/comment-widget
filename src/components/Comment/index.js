import React from 'react';
import './Comment.css';

const Comment = ({Author, timestamp, Body}) => {
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
      <div className="comment=body">
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
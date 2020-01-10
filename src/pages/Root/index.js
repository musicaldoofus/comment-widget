import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import InputContainer from '../../components/InputContainer';
import { toCommentBox } from '../../components/Comment';
import CONSTANTS from '../../helpers/constants';
import './Root.css';

const Root = () => {
    const [comments, setComments] = useState(null);
  
    useEffect(() => {
      axios.get(CONSTANTS.GET_ENDPOINT_URL)
        .then(({data}) => setComments(data))
        .catch(err => console.error(err));
    }, []);
  
    const handleSubmit = (c) => {
      setComments(comments.concat(c))/*.sort(byDate)*/
    }
  
      return (
          <div className="comments-container">
        <InputContainer onSubmit={handleSubmit}/>
        <div className="comments-list-container">
          {comments ?
            comments.map(toCommentBox)
            : <Loading/>
          }
        </div>
      </div>  
    );
  }

  export default Root;
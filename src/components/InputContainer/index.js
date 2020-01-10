import React, { useState } from 'react';
import axios from 'axios';
import RatingsContainer from '../RatingsContainer';
import generateId from '../../helpers/generateId';
import WaitingMessage, { ErrorMessage, SuccessMessage } from '../Messages';
import CONSTANTS from '../../helpers/constants';
import './InputContainer.css';

const InputContainer = ({/*author,*/ onSubmit}) => { //to extend: pass author prop from token on authorization (otherwise, return <Loading/> while waiting for token in <App/>)
    const [inputValue, setInput] = useState('');
    const [submitStatus, setSubmitStatus] = useState(null); //(null|'waiting'|'success'|'failure')
    const [authorInputValue, setAuthor] = useState(null);
    const [rating, setRating] = useState(5);
  
    const handleOnChange = (e) => {
      e.preventDefault();
      setInput(e.target.value);
    }
  
    const handleOnSubmit = () => {
      setSubmitStatus('waiting');
      const params = {
        CommentId: generateId(),
        Author: authorInputValue ? authorInputValue : 'anonymous',
        Rating: rating,
        Body: inputValue
      };
      axios.put(CONSTANTS.PUT_ENDPOINT_URL, params)
        .then(d => {
          setSubmitStatus('success');
          onSubmit(params);
        })
        .catch(err => {
          console.error('error', err);
          setSubmitStatus('failure');
        });
    }
  
    const handleMessageDismiss = () => setSubmitStatus(null);

    const handleAuthorOnChange= (e) => setAuthor(e.target.value);

    const handleRatingsOnChange = (r) => setRating(r);
  
    return (  
      <div className="comments-input-container">
        {submitStatus === 'waiting' && <WaitingMessage onDismiss={handleMessageDismiss}/>}
        {submitStatus === 'success' && <SuccessMessage onDismiss={handleMessageDismiss}/>}
        {submitStatus === 'failure' && <ErrorMessage onDismiss={handleMessageDismiss}/>}
        <textarea placeholder="Enter comment here" value={inputValue} onChange={handleOnChange}/>
        <RatingsContainer rating={rating} onChange={handleRatingsOnChange}/>
        <input type="text" placeholder="Enter login@ here (opt)" value={authorInputValue ? authorInputValue : ''} onChange={handleAuthorOnChange}/>
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    );
  }

  export default InputContainer;
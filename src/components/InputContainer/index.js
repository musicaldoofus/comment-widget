import React, { useState } from 'react';
import axios from 'axios';
import generateId from '../../helpers/generateId';
import WaitingMessage, { ErrorMessage, SuccessMessage } from '../Messages';
import CONSTANTS from '../../helpers/constants';

const InputContainer = ({author, onSubmit}) => {
    const [inputValue, setInput] = useState('Enter comment here');
    const [submitStatus, setSubmitStatus] = useState(null); //(null|'waiting'|'success'|'failure')
  
    const handleOnChange = (e) => {
      e.preventDefault();
      setInput(e.target.value);
    }
  
    const handleOnSubmit = () => {
      setSubmitStatus('waiting');
      const params = {
        CommentId: generateId(),
        Author: author ? author : 'anonymous',
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
  
    return (  
      <div className="comments-input-container">
        {submitStatus === 'waiting' && <WaitingMessage onDismiss={handleMessageDismiss}/>}
        {submitStatus === 'success' && <SuccessMessage onDismiss={handleMessageDismiss}/>}
        {submitStatus === 'failure' && <ErrorMessage onDismiss={handleMessageDismiss}/>}
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    );
  }

  export default InputContainer
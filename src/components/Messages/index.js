import React from 'react';

const WaitingMessage = ({onDismiss}) => {
    return (
      <div className="message waiting">
        <button onClick={onDismiss}>&times;</button>
        Waiting for the server...
      </div>
    );
  }

  const ErrorMessage = ({onDismiss}) => {
    return (
      <div className="message error">
        <button onClick={onDismiss}>&times;</button>
        Looks like there was an error.
        <br/>
        For more info, email <a href="mailto:jeddle@amazon.com">jeddle@amazon.com</a>.
      </div>
    )
  }
  
  const SuccessMessage = ({onDismiss}) => {
    return (
      <div className="message success">
        <button onClick={onDismiss}>&times;</button>
        Your message was posted!
      </div>
    );
  }

export default WaitingMessage;
export { ErrorMessage, SuccessMessage };
import React from 'react';
import './Ratings.css';

const Star = ({isActive, small, onClick}) => {
    //console.log('isActive', isActive);
    return (
        <div onClick={onClick} className={`ratings-star${isActive ? ' active' : ''}${small ? ' small' : ''}`}></div>
    );
}

const RatingsContainer = ({rating, onChange}) => {
    const stars = Array.from({length: 5}, (_, i) => (
        <Star
            key={i}
            isActive={rating > i}
            onClick={() => onChange(i + 1)}
        />
    ));

    return (
        <div className="ratings-container">
            {stars}
        </div>
    )
}

export default RatingsContainer;
export { Star };
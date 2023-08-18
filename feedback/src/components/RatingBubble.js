import React from 'react';

const RatingBubble = ({ value, selected, onClick }) => {
  return (
    <div
      className={`rating-bubble ${selected ? 'selected' : ''}`}
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default RatingBubble;


import React, { useState } from 'react';
import RatingBubble from './RatingBubble';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ rating, review });
    // Show an alert after submitting the form
    window.alert('Thank you for your feedback!');
    // Reset the form
    setRating(null);
    setReview('');
  };

  return (
    <div className="review-form">
      <div className="rating-bubbles">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <RatingBubble
            key={value}
            value={value}
            selected={value === rating}
            onClick={handleRatingClick}
          />
        ))}
      </div>
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={handleReviewChange}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default ReviewForm;

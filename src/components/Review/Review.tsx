import React from 'react';

interface ReviewProps {
  user: string;
  rating: number;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({ user, rating, comment }) => {
  return (
    <div>
      <h3>{user}</h3>
      <p>Rating: {rating}/5</p>
      <p>{comment}</p>
    </div>
  );
};

export default Review;


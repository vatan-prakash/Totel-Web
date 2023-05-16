import React from 'react';
import Review from './Review';

interface ReviewsProps {
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review key={index} user={review.user} rating={review.rating} comment={review.comment} />
      ))}
    </div>
  );
};

export default Reviews;

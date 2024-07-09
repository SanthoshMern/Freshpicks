import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ value }) => {
  const maxStars = 5; // Maximum number of stars to display
  const rating = parseFloat(value); // Convert value to float (if necessary)

  // Round to nearest half-star
  const roundedRating = Math.round(rating * 2) / 2;
  
  // Create an array of stars to render based on the rating
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (roundedRating >= i) {
      stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
    } else if (roundedRating + 0.5 === i) {
      stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
    }
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;

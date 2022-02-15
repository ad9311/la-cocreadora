import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FilledStar from '../../assets/images/purple-filled-star.png';
import UnfilledStar from '../../assets/images/purple-unfilled-star.png';
import { selectRating } from '../redux/rating/ratingSlice';

const ScoreStar = (props) => {
  const { rating } = useSelector((state) => state.rating);
  const dispatch = useDispatch();
  const { id } = props;

  const rateHandle = () => {
    dispatch(selectRating(id));
  };

  return (
    <button type="button" className="score_stars" onClick={rateHandle}>
      <img src={rating >= id ? FilledStar : UnfilledStar} alt="star" />
    </button>
  );
};

ScoreStar.propTypes = {
  id: PropTypes.number,
};

ScoreStar.defaultProps = {
  id: 0,
};

export default ScoreStar;

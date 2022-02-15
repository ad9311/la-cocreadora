import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectRating } from '../redux/rating/ratingSlice';

const ScoreStar = (props) => {
  const { rating, next } = useSelector((state) => state.rating);
  const { selected } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();
  const {
    id, unmut, filledStar, unfilledStar,
  } = props;

  useEffect(() => {
    if (!next) {
      dispatch(selectRating(0));
    }
  }, [next]);

  const rateHandle = () => {
    if (!unmut) {
      dispatch(selectRating(id));
    }
  };

  const ratedChallenge = () => {
    if (selected.status === 'En curso' || selected.status === 'Pendiente') {
      return (<img src={rating >= id ? filledStar : unfilledStar} alt="star" />);
    }
    return (
      <img src={selected.rating >= id ? filledStar : unfilledStar} alt="star" />
    );
  };

  return (
    <button type="button" className="score_stars" onClick={rateHandle}>
      {ratedChallenge()}
    </button>
  );
};

ScoreStar.propTypes = {
  id: PropTypes.number,
  unmut: PropTypes.bool,
  filledStar: PropTypes.string,
  unfilledStar: PropTypes.string,
};

ScoreStar.defaultProps = {
  id: 0,
  unmut: false,
  filledStar: '',
  unfilledStar: '',
};

export default ScoreStar;

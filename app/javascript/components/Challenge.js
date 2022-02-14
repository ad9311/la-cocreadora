import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectChallenge } from '../redux/challenges/challengesSlice';

const Challenge = (props) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.challenges);
  const { challenge } = props;

  const challengeStatusColor = () => {
    if (challenge.status === 'En curso' || challenge.status === 'Pendiente') {
      return 'pending';
    }
    if (challenge.status === 'Aprobado') {
      return 'approved';
    }
    return 'rejected';
  };

  const selectChallengeHandle = () => {
    if (selected.id !== challenge.id) {
      dispatch(selectChallenge(challenge));
    }
  };

  return (
    <article className="challenge">
      <div>
        <button type="button" onClick={selectChallengeHandle}><h2>{challenge.objective}</h2></button>
      </div>
      <div>
        <span>
          {`${challenge.time} ${challenge.time > 1 ? 'Horas' : 'Hora'} / ${challenge.points} Pts`}
        </span>
      </div>
      <div className="status">
        <span className={`${challengeStatusColor()}`}>
          <strong>{challenge.status}</strong>
        </span>
      </div>
    </article>
  );
};

Challenge.propTypes = {
  challenge: PropTypes.objectOf(PropTypes.objectOf),
};

Challenge.defaultProps = {
  challenge: {},
};

export default Challenge;

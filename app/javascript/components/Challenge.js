import React from 'react';
import PropTypes from 'prop-types';

const Challenge = (props) => {
  const {
    objective,
    time,
    points,
    status,
  } = props;

  const challengeStatusColor = () => {
    if (status === 'En curso' || status === 'Pendiente') {
      return 'pending';
    }
    if (status === 'Aprobado') {
      return 'approved';
    }
    return 'rejected';
  };

  return (
    <article className="challenge">
      <div>
        <h2>{objective}</h2>
      </div>
      <div>
        <span>{`${time} ${time > 1 ? 'Horas' : 'Hora'} / ${points} Pts`}</span>
      </div>
      <div className="status">
        <span className={`${challengeStatusColor()}`}>
          <strong>{status}</strong>
        </span>
      </div>
    </article>
  );
};

Challenge.propTypes = {
  objective: PropTypes.string,
  time: PropTypes.number,
  points: PropTypes.number,
  status: PropTypes.string,
};

Challenge.defaultProps = {
  objective: '',
  time: 0.0,
  points: 0,
  status: '',
};

export default Challenge;

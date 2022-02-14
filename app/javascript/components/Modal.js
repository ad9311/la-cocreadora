import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectChallenge } from '../redux/challenges/challengesSlice';
import Close from '../../assets/images/close.png';

const Modal = (props) => {
  const dispatch = useDispatch();
  const { challenge } = props;

  const closeChallengeHandle = () => {
    dispatch(selectChallenge({}));
  };

  const challengeStatus = () => {
    if (challenge.status === 'En curso' || challenge.status === 'Pendiente') {
      return (
        <div className="modal_inner">
          <div className="right_container">
            <h2 className="objective">{challenge.objective}</h2>
            <div className="description">
              <p>{challenge.description}</p>
            </div>
            <div className="assigned">
              <span>Desafío asignado a:</span>
              <p>{challenge.assigned}</p>
            </div>
          </div>
          <div className="left_container">
            <div className="deadline">
              <span>Fecha límite de entrega del desafío:</span>
              <p>{challenge.deadline}</p>
              <div className="comment">
                <p>Ya realicé el desafío, quedo atento a la evaluación. Gracias.</p>
                <span>{challenge.deadline}</span>
              </div>
            </div>
            <div className="score_button">
              <button type="button">Evaluar desafío</button>
            </div>
          </div>
        </div>
      );
    }
    if (challenge.status === 'Aprobado') {
      return (
        <div>
          <p>Aprobado</p>
        </div>
      );
    }
    return (
      <div>
        <p>Rechazado</p>
      </div>
    );
  };

  const challengeStatusTitle = () => {
    if (challenge.status === 'En curso' || challenge.status === 'Pendiente') {
      return (
        <p>Evaluación</p>
      );
    }
    return (
      <p>Evaluación finalizada</p>
    );
  };

  return (
    <div>
      <div className="modal_top">
        <button type="button" onClick={closeChallengeHandle}>
          <img src={Close} alt="close" />
        </button>
        <h2>Desafío Designado</h2>
        {challengeStatusTitle()}
      </div>
      <div>{challengeStatus()}</div>
    </div>
  );
};

Modal.propTypes = {
  challenge: PropTypes.objectOf(PropTypes.objectOf),
};

Modal.defaultProps = {
  challenge: {},
};

export default Modal;

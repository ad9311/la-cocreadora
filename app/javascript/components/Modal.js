import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openScoreModal, selectChallenge } from '../redux/challenges/challengesSlice';
import Close from '../../assets/images/close.png';
import Profile from '../../assets/images/profile.png';
import FilledStar from '../../assets/images/cyan-filled-star.png';
import UnfilledStar from '../../assets/images/cyan-unfilled-star.png';
import ScoreModal from './ScoreModal';

const Modal = (props) => {
  const dispatch = useDispatch();
  const { openScore } = useSelector((state) => state.challenges);
  const { challenge } = props;

  const closeChallengeHandle = () => {
    dispatch(selectChallenge({}));
  };

  const scoreChallengeHandle = () => {
    if (!openScore) {
      dispatch(openScoreModal(!openScore));
    }
  };

  const ratingStars = (starType) => {
    const starArray = new Array(5).fill(starType);
    const mapStars = starArray.map((star, index) => (
      <img key={`${star}-${index}`} src={star} alt="star" />
    ));
    return mapStars;
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
              <button type="button" onClick={scoreChallengeHandle}>Evaluar desafío</button>
            </div>
          </div>
        </div>
      );
    }
    if (challenge.status === 'Aprobado') {
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
          <div className="left_container center">
            <div className="profile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="name_rating">
              <h3>{challenge.assigned}</h3>
              <div className="stars_rating">
                {ratingStars(FilledStar)}
              </div>
              <span>{`Calificación: ${challenge.rating} de 5`}</span>
            </div>
            <div className="info_status status_approved">
              <span>Desafío aprobado</span>
            </div>
          </div>
        </div>
      );
    }
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
        <div className="left_container center">
          <div className="profile">
            <img src={Profile} alt="profile" />
          </div>
          <div className="name_rating">
            <h3>{challenge.assigned}</h3>
            <div className="stars_rating">
              {ratingStars(UnfilledStar)}
            </div>
            <span>{`Calificación: ${challenge.rating} de 5`}</span>
          </div>
          <div className="info_status status_unapproved">
            <span>Desafío desaprobado</span>
          </div>
        </div>
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
    <div className="modal_outer">
      {openScore && <ScoreModal />}
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../../assets/images/close.png';
import { openScoreModal } from '../redux/challenges/challengesSlice';
import { nextPage, rateChallenge } from '../redux/rating/ratingSlice';
import ScoreStar from './ScoreStar';
import FilledStar from '../../assets/images/purple-filled-star.png';
import UnfilledStar from '../../assets/images/purple-unfilled-star.png';
import Profile from '../../assets/images/profile.png';
import Check from '../../assets/images/check.png';

const ScoreModal = () => {
  const { openScore, selected } = useSelector((state) => state.challenges);
  const { next, rating, confirmation } = useSelector((state) => state.rating);
  const dispatch = useDispatch();

  const closeScoreModal = () => {
    if (openScore) {
      dispatch(openScoreModal(!openScore));
      if (next) {
        dispatch(nextPage());
      }
    }
  };

  const nextPageHandle = () => {
    dispatch(nextPage());
  };

  const rateChallengeHandle = () => {
    const score = () => {
      if (rating >= 3) {
        return 'Aprobado';
      }
      return 'Rechazado';
    };

    dispatch(rateChallenge({
      id: selected.id,
      rating,
      status: score(),
    }));
  };

  const mapRatingStars = (unmut = false) => {
    const indexes = [1, 2, 3, 4, 5];
    const mapStars = indexes.map(
      (index) => {
        if (unmut) {
          return (
            <ScoreStar key={index} id={index} unmut filledStar={FilledStar} unfilledStar={UnfilledStar} />
          );
        }
        return (
          <ScoreStar key={index} id={index} filledStar={FilledStar} unfilledStar={UnfilledStar} />
        );
      },
    );
    return mapStars;
  };

  const renderPage = () => {
    if (confirmation !== '') {
      return (
        <div className="confirmation">
          <img src={Check} alt="check" />
          <h3>Evaluación enviada</h3>
          <p>{confirmation.message}</p>
        </div>
      );
    }
    if (next) {
      return (
        <div>
          <div className="final_text">
            <p>¡El desafío ha sido aprobado!</p>
          </div>
          <div className="final_score_conatiner">
            <div className="rating_side">
              <div className="rating_side_div">
                <img src={Profile} alt="profile" />
                <h3>{selected.assigned}</h3>
              </div>
              <div className="stars_final_score">
                {mapRatingStars(true)}
              </div>
            </div>
            <div className="comment_side">
              <textarea placeholder="Escribe un comentario..." />
              <div className="send_button">
                <button type="button" onClick={rateChallengeHandle}>Enviar evaluación</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="hint">
          <p>
            {`Califique a ${selected.assigned} en una escala de 1 a 5 teniendo
              en cuenta el cumplimiento del objetivo planteado al inicio del ejercicio.`}
          </p>
        </div>
        <div className="center">
          <p>Calificación</p>
          <div className="rating_container">
            <div className="stars_container">
              {mapRatingStars()}
            </div>
            <div className="scale">
              <p>Más bajo</p>
              <p>Más alto</p>
            </div>
          </div>
        </div>
        <div className="rating_text">
          <p>Cumplió satisfactoriamente y superó las expectativas con los objectivos designados.</p>
        </div>
        <div className="score_button">
          <button type="button" onClick={nextPageHandle}>Siguiente</button>
        </div>
      </div>
    );
  };

  return (
    <div className="score_modal">
      <div className="modal_top">
        <button type="button" onClick={closeScoreModal}>
          <img src={Close} alt="close" />
        </button>
        {confirmation.message === undefined ? <h2>Evalúe los resultados del Desafío:</h2> : ''}
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
};

export default ScoreModal;

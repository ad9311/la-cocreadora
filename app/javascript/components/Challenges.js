import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChallenges } from '../redux/challenges/challengesSlice';
import Challenge from './Challenge';
import Modal from './Modal';

const Challenges = () => {
  const { challenges, status, selected } = useSelector((state) => state.challenges);
  const { confirmation } = useSelector((state) => state.rating);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default' || confirmation !== '') {
      dispatch(fetchChallenges());
    }
  }, [status, selected, confirmation]);

  const mapChallenges = challenges.data.map(
    (challenge) => (
      <Challenge
        key={challenge.id}
        challenge={challenge}
      />
    ),
  );

  return (
    <div>
      {selected.id !== undefined
        ? (
          <div className="modal">
            <Modal challenge={selected} />
          </div>
        )
        : ''}
      <div className={selected.id !== undefined ? 'main_container blur' : 'main_container'}>
        <div className="title">
          <h1>Desafíos</h1>
          <p>General</p>
        </div>
        <div className="challenge_container">
          {mapChallenges}
        </div>
      </div>
    </div>
  );
};

export default Challenges;

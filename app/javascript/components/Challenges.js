import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChallenges } from '../redux/challenges/challengesSlice';
import Challenge from './Challenge';

const Challenges = () => {
  const { challenges, status } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchChallenges());
    }
  }, [status]);

  const mapChallenges = challenges.data.map(
    (challenge) => (
      <Challenge
        key={challenge.id}
        challenge={challenge}
      />
    ),
  );

  return (
    <div className="main_container">
      <div className="title">
        <h1>Desafíos</h1>
        <p>General</p>
      </div>
      <div className="challenge_container">
        {mapChallenges}
      </div>
    </div>
  );
};

export default Challenges;

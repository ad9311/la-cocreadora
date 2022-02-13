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
        objective={challenge.objective}
        time={challenge.time}
        points={challenge.points}
        status={challenge.status}
      />
    ),
  );

  return (
    <div>
      {mapChallenges}
    </div>
  );
};

export default Challenges;

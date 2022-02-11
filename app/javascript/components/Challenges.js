import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChallenges } from '../redux/challenges/challengesSlice';

const Challenges = () => {
  const { challenges, status } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchChallenges());
    }
  }, [status]);

  return (
    <div>
      <p>{challenges.message}</p>
    </div>
  );
};

export default Challenges;

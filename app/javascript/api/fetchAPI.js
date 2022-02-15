const fetchAPI = async () => {
  const URL = 'http://127.0.0.1:3000/api/v1/challenges';
  const request = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const response = await request.json();
  return response;
};

export const postScore = async (scoreData) => {
  const URL = `http://127.0.0.1:3000/api/v1/challenges/${scoreData.id}`;
  const request = await fetch(URL, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  });
  const response = await request.json();
  return response;
};

export default fetchAPI;

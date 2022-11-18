const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'QmBRiboxf9NS9PwHPO7l';

const getScoresApi = async () => {
  const response = await fetch(`${API_URL}games/${GAME_ID}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  })
  if (response.ok) {
    const result = await response.json();
    return (result);
  }
  console.error("GET: [ /scores/ ]", response);
  return (false);
};

const saveScoresApi = async (data) => {
  const response = await fetch(`${API_URL}games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    body: JSON.stringify({
      user: data.fullName,
      score: data.score,
    }),
  });
  if (response.ok) {
    const result = await response.json();
    return (result);
  }
  console.error("POST: [ /scores/ ]", response);
  return (false);
};

export { saveScoresApi, getScoresApi };

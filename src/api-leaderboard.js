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
  });
  const result = await response.json();
  return result;
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
      user: `"${data.fullName}"`,
      score: data.score,
    }),
  });
  const result = await response.json();
  return result;
};

export { saveScoresApi, getScoresApi };

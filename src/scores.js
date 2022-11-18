import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars
import { saveScoresApi } from './api-leaderboard.js';
import { renderErrorSubmit } from './render.js';

class Scores {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  async add(fullName, score) {
    const node = {};
    node.fullName = fullName;
    node.score = score;
    this.scoreList.push(node);
    const result = await saveScoresApi(node);
    if (!result) {
      renderErrorSubmit('submit-alert');
    }
  }
}

export default Scores;

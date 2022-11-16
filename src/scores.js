import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars
import { saveScoresApi } from './api-leaderboard.js';

class Scores {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  async add(fullName, score) {
    const node = {};
    node.fullName = fullName;
    node.score = score;
    this.scoreList.push(node);
    await saveScoresApi(node);
  }
}

export default Scores;

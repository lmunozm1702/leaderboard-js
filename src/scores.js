import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars

class Scores {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  add(fullName, score) {
    const node = {};
    node.fullName = fullName;
    node.score = score;
    this.scoreList.push(node);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('LeaderBoard', JSON.stringify(this.scoreList));
  }
}

export default Scores;

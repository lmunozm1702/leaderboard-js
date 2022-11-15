import { defaults } from "lodash";

class Scores {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  add(fullName, score) {
    let node = {};
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

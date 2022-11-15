import _ from 'lodash';
import './style.css';
import Scores from './scores';
import renderList from './render';

const addButton = document.querySelector('#add-button');
const scoreInput = document.querySelector('#score');
const fullNameInput = document.querySelector('#full-name');
const refreshButton = document.querySelector('#refresh-button');

let myScores = new Scores();

addButton.addEventListener('click', (event) => {
  if ((fullNameInput.value !== '') && (scoreInput.value !== '')) {
    event.preventDefault();
    myScores.add(fullNameInput.value, scoreInput.value);
  }
});

refreshButton.addEventListener('click', () => {
  renderList(myScores, 'result-list');
});

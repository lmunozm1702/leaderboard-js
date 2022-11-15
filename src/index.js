import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import Scores from './scores.js';
import renderList from './render.js';

const addButton = document.querySelector('#add-button');
const scoreInput = document.querySelector('#score');
const fullNameInput = document.querySelector('#full-name');
const refreshButton = document.querySelector('#refresh-button');

const myScores = new Scores();

addButton.addEventListener('click', (event) => {
  if ((fullNameInput.value !== '') && (scoreInput.value !== '')) {
    event.preventDefault();
    myScores.add(fullNameInput.value, scoreInput.value);
  }
});

refreshButton.addEventListener('click', () => {
  renderList(myScores, 'result-list');
});

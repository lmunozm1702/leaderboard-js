import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import Scores from './scores.js';
import { renderList, renderErrorLoad } from './render.js';
import { getScoresApi } from './api-leaderboard.js';

const addButton = document.querySelector('#add-button');
const scoreInput = document.querySelector('#score');
const fullNameInput = document.querySelector('#full-name');
const refreshButton = document.querySelector('#refresh-button');
const submitAlert = document.querySelector('#submit-alert');

const myScores = new Scores();

addButton.addEventListener('click', async (event) => {
  if ((fullNameInput.value !== '') && (scoreInput.value !== '')) {
    event.preventDefault();
    submitAlert.textContent = '';
    await myScores.add(fullNameInput.value, scoreInput.value);
    fullNameInput.value = '';
    scoreInput.value = '';
  }
});

refreshButton.addEventListener('click', async () => {
  const savedScores = await getScoresApi();
  if (savedScores) {
    renderList(savedScores.result, 'result-list');
  } else {
    renderErrorLoad('result-list');
  }
});

window.addEventListener('load', async () => {
  const savedScores = await getScoresApi();
  if (savedScores) {
    renderList(savedScores.result, 'result-list');
  } else {
    renderErrorLoad('result-list');
  }
});
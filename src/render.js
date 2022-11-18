import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars

const renderList = (myList, tagId) => {
  const parentItem = document.querySelector(`#${tagId}`);
  parentItem.textContent = '';
  myList.sort((a, b) => a.user.localeCompare(b.user)).forEach((scoreItem) => {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.textContent = `${scoreItem.user}: ${scoreItem.score}`;
    parentItem.appendChild(newElement);
  });
};

const renderErrorLoad = (tagId) => {
  const parentItem = document.querySelector(`#${tagId}`);
  parentItem.removeChild(parentItem.firstChild);
  const newElement = document.createElement('li');
  newElement.className = 'list-item';
  newElement.textContent = `Ops!, we find an error, please tray again in a few minutes`;
  parentItem.appendChild(newElement);
};

const renderErrorSubmit = (tagId) => {
  const parentItem = document.querySelector(`#${tagId}`);
  parentItem.textContent = `Ops!, we find an error, please tray again in a few minutes`;
};

export { renderList, renderErrorLoad, renderErrorSubmit };

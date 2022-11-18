import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars

const renderList = (myList, tagId) => {
  const parentItem = document.querySelector(`#${tagId}`);
  parentItem.textContent = '';
  myList.forEach((scoreItem) => {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.textContent = `${scoreItem.user}: ${scoreItem.score}`;
    parentItem.appendChild(newElement);
  });
};

const renderErrorLoad = (err, tagId) => {
  const parentItem = document.querySelector(`#${tagId}`);
  const newElement = document.createElement('li');
  newElement.className = 'list-item';
  newElement.textContent = `Ops!, we find an error [${err.status}], please tray again in a few minutes`;
  parentItem.appendChild(newElement);
}

export { renderList, renderErrorLoad };

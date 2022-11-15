import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars

function renderList(myList, tagId) {
  const parentItem = document.querySelector(`#${tagId}`);

  myList.scoreList.forEach((scoreItem) => {
    const newElement = document.createElement('li');
    newElement.textContent = `${scoreItem.fullName}: ${scoreItem.score}`;
    parentItem.appendChild(newElement);
  });
}

export default renderList;

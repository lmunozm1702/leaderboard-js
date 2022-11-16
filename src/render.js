import { defaults } from 'lodash'; // eslint-disable-line no-unused-vars

function renderList(myList, tagId) {
  const parentItem = document.querySelector(`#${tagId}`);
  parentItem.textContent = '';
  myList.forEach((scoreItem) => {
    const newElement = document.createElement('li');
    newElement.textContent = `${scoreItem.user}: ${scoreItem.score}`;
    parentItem.appendChild(newElement);
  });
}

export default renderList;

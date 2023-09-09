'use strict';

window.ACCESS_POINT = 'https://api.edamam.com/api/recipes/v2';

const APP_ID = 'edad2d34';
const API_KEY = 'c3b568b021c4263f408e5dd1de2f450d';
const TYPE = 'public';

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join('&')
    .replace(/,/g, '=')
    .replace(/ /g, '%20')
    .replace(/\+/g, '%2B');

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${
    query ? `&${query}` : ''
  }`;

  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    successCallback(data);
  }
};

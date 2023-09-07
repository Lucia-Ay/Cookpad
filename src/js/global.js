'use strict';

window.addEventOnElements = ($elements, eventType, callback) => {
  for (const $element of $elements) {
    $element.addEventlistener(eventType, callback);
  }
};

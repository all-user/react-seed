import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
const Components = require('./Components.js');

document.addEventListener('DOMContentLoaded', ev => {
  ReactDOM.render(<Components.Example/>, document.querySelector('#app'));
});

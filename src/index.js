import React, {createElement as $} from 'react';
import ReactDom, {render} from 'react-dom';
import TodoHeader from './TodoHeader.js';

var root = document.getElementById("root");
render($(TodoHeader),root);

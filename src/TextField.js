import React, {createFactory, Component, createElement as $} from 'react';
import Item from './Item.js';
import ReactDom from 'react-dom';
import TodoHeader, {items} from './TodoHeader.js';
//var items = [];
const div = createFactory('div');
const input = createFactory('input');
class TextField extends Component {

  constructor() {
    super()
    this.state = {items:[]};
  }

  change(event) {

  }
  
  addItem(event) {

    if (event.key == "Enter") {
      items.push({todo: this.refs["todoInputField"].value, checked:false});
    }

  }

  render() {
    var todo = this.state.todo;
    return (
      div({},
        input({ref:"todoInputField", value:todo, type:"text", onChange:this.change, onKeyPress:this.addItem})
      )
    );
  }
}
export {items};
export default TextField;

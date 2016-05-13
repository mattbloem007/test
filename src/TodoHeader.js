import React, {createFactory, Component, createElement as $} from 'react'
import Item from './Item.js';

const div = createFactory('div');
const input = createFactory('input');
const h1 = createFactory('h1');

class TodoHeader extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      todo: "Enter an item"
    }
  }

  change(event) {
    this.setState({
      items: this.state.items,
      todo: event.target.value
    })
  }

  addItem(event) {
    if (event.key == "Enter") {
      this.setState({
        items: this.state.items.concat([{todo: this.state.todo, checked:false}])
      })
    }
  }

  checkItem(event) {
    this.setState({
      items: this.state.items.concat([{todo:this.state.todo, checked:true}])
    })
  }

  render() {
    return (
      div({},
      	h1({}, "Todo"),
        div({},
          input({value: this.state.todo, type:"text", onChange:this.change.bind(this), onKeyPress:this.addItem.bind(this)})
        ),
        div({},
            this.state.items.map(function(item) {
        			return $(Item({item: item, checkListener: this.checkItem}))
      			})
        )
      )
    );
  }
}

export default TodoHeader;

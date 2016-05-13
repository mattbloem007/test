import React, {createFactory, Component, createElement as $} from 'react';

const div = createFactory('div');
const input = createFactory('input');

class Item extends Component {

  constructor() {
    super();
  }

  checkItem(event) {
    this.props.checkListener(event.target.value)
  }

  render() {
    return(
      div({},
        input({type:"checkbox", onClick:this.checkItem.bind(this), checked: this.props.item.checked}),
        this.props.item.todo
      )
    )
  }
}

export default Item;

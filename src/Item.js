import React, {createFactory, Component, createElement as $} from 'react';

const div = createFactory('div');
const input = createFactory('input');

class Item extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      div({},
        input({type:"checkbox", onClick:this.props.checkListener.bind(this), checked: this.props.item.checked}),
        this.props.item.todo
      )
    )
  }
}

export default Item;

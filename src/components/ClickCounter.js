import React from 'react';

const handleClick1 = (e) => {
  e.persist();
  console.log('event', e);
}

const handleClick2 = (e, that) => {
  e.persist();
  console.log('event', e);
  console.log('that', that);
}

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick3(e) {
    e.persist();
    console.log('event', e);
    console.log('this', this);
  }

  handleClick4 = (e) => {
    e.persist();
    console.log('event', e);
    console.log('this', this);

    this.setState({count: this.state.count + 1});
  }

  handleClick5 = (test) => (e) => {
    e.persist();
    console.log('event', e);
    console.log('test', test);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/*<button onClick={handleClick1}>Increment</button>*/}
        {/*<button onClick={(e) => handleClick2(e, this)}>Increment</button>*/}
        {/*<button onClick={this.handleClick3}>Increment</button>*/}
        <button onClick={this.handleClick4}>Increment</button>
        {/*<button onClick={this.handleClick5('text')}>Increment</button>*/}
      </div>
    )
  }
}

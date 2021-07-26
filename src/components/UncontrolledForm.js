import React from 'react';

export class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.input = React.createRef();
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`submitted form value: ${this.input.current.value}`);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={this.input} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

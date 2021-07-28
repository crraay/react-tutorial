import React from 'react';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.input = React.createRef();
    this.form = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.input.current.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.input.current.value;

    if(!value) { return; }

    const item = { value: value, uid: new Date()}

    const newItems = [item, ...this.state.items];
    this.setState({items: newItems});

    this.form.current.reset();
  }

  handleRemove(uid) {
    const newItems = this.state.items.filter(i => i.uid !== uid);
    this.setState({items: newItems});
  }

  render() {
    return (
      <>
        <h3>There are {this.state.items.length} items</h3>
        <ol>
          {this.state.items.map(i => (
            <li key={i.uid}>
              {i.value}
              <button onClick={(e) => this.handleRemove(i.uid)}>X</button>
            </li>
          ))}
        </ol>
        <form ref={this.form} onSubmit={this.handleSubmit}>
          <input type="text" ref={this.input}/>
          <button type="submit">add</button>
        </form>

      </>
    );
  }
}

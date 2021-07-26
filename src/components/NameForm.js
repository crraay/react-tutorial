import React from 'react';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      citizenship: 'usa'
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`submitted form value: ${this.state.firstName} ${this.state.lastName} ${this.state.citizenship}`);
  }
  onValueChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="firstName" onChange={this.onValueChange} value={this.state.firstName}/>
        <input type="text" name="lastName" onChange={this.onValueChange} value={this.state.lastName}/>
        <select name="citizenship" value={this.state.citizenship} onChange={this.onValueChange}>
          <option value="rus">Russia</option>
          <option value="usa">USA</option>
          <option value="eu">Europe</option>
        </select>
        <button type='submit'>Send</button>
      </form>
    );
  }
}

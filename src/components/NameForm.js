import React from 'react';
import {MyInput} from "./MyInput/MyInput";

export class NameForm extends React.Component {
  citizenships = [
    {
      id: 'ru',
      title: 'Russia'
    },
    {
      id: 'eu',
      title: 'Europe'
    },
    {
      id: 'us',
      title: 'USA'
    },
  ]
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      citizenship: 'us'
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`submitted form value: ${this.state.firstName} ${this.state.lastName} ${this.state.citizenship}`);
    alert(`submitted form value: ${this.state.firstName} ${this.state.lastName} ${this.state.citizenship}`);
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
        <MyInput labelText="First name" name="firstName" onChange={this.onValueChange} value={this.state.firstName}/>
        <MyInput labelText="Last name" name="lastName" onChange={this.onValueChange} value={this.state.lastName}/>
        <select name="citizenship" value={this.state.citizenship} onChange={this.onValueChange}>
          {this.citizenships.map(i => <option key={i.id} value={i.id}>{i.title}</option>)}
        </select>
        <button type='submit'>Send</button>
      </form>
    );
  }
}

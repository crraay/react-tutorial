import React from 'react';
import {changeTitle} from "../actions/title";
import {connect} from "react-redux";

export class TitleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localTitle: 'Default title'
    }
    this.onLocalTitleChange = this.onLocalTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onLocalTitleChange(e) {
    this.setState({localTitle: e.target.value});
  }
  onSubmit(e) {
    this.props.onChangeTitle(this.state.localTitle);
  }
  render() {
    return (
      <>
        <span>local value: {this.state.localTitle}, </span>
        <span>store value: {this.props.title}</span>
        <input onChange={this.onLocalTitleChange}/>
        <button onClick={this.onSubmit}>Set title</button>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTitle: title => {
      dispatch(changeTitle(title))
    }
  }
}

export const Title = connect(mapStateToProps, mapDispatchToProps)(TitleComponent)

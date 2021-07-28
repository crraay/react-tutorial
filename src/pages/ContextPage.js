import React from 'react';
import {UserContext} from "../context/user";

export class ContextPage extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <span>
          default context: {this.context}
        </span>
        <UserContext.Provider value="current user">
          <UserContext.Consumer>{user => <span> new context: {user}</span>}
          </UserContext.Consumer>
        </UserContext.Provider>
      </>
    );
  }
}

import React from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import {renderRoutes} from "react-router-config";

import {routes} from "./routes";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          {renderRoutes(routes)}
          {/*<Switch>*/}
          {/*  <Route exact path="/basic" component={BasicExamplesPage} />*/}
          {/*  <Route exact path="/state" render={() => <StateExamplesPage items={this.state.items} />} />*/}
          {/*  <Route exact path="/forms" component={FormExamplesPage} />*/}
          {/*  <Route exact path="/todo" component={TodoList} />*/}
          {/*  <Route exact path="/test/:id" component={TestPage} />*/}
          {/*</Switch>*/}
        </header>
      </div>
    );
  }
}

export default App;

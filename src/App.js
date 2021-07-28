import React from 'react';
import {Menu} from "./components/Menu";
import {renderRoutes} from "react-router-config";
import {routes} from "./routes";
import {ErrorCatcher} from "./components/ErrorCatcher";
import styles from "./App.module.scss";
import {ModalProvider} from "./context/modal";
import {ModalRoot} from "./components/Modal/ModalRoot";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <aside className={styles.aside}>
          <Menu className={styles.menu} activeClassName={styles.activeClassName}/>
        </aside>
        <div className={styles.content}>
          <ErrorCatcher>
          <ModalProvider>
            {renderRoutes(routes)}
            <ModalRoot />
          </ModalProvider>
          </ErrorCatcher>
          {/*<Switch>*/}
          {/*  <Route exact path="/basic" component={BasicExamplesPage} />*/}
          {/*  <Route exact path="/state" render={() => <StateExamplesPage items={this.state.items} />} />*/}
          {/*  <Route exact path="/forms" component={FormExamplesPage} />*/}
          {/*  <Route exact path="/todo" component={TodoList} />*/}
          {/*  <Route exact path="/test/:id" component={TestPage} />*/}
          {/*</Switch>*/}
        </div>
      </div>
    );
  }
}

export default App;

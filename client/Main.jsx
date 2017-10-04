import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Recommendations from './recoComponents/Recommendations';
import Charts from './chartComponents/chartsApp';
import Dashboard from './BuildComponents/Dashboard';

class Main extends React.Component {
  renderLoader() {
    return (
      <div className="loader">Loading...</div>
    );
  }

  renderApp() {
    return (
      <main>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Charts
                build={this.props.build}
                activeBuild={this.props.activeBuild}
                handleCircleClick={this.props.handleCircleClick}
              />
            )}
          />
          <Route path="/builds" render={() => <Dashboard build={this.props.build} activeBuild={this.props.activeBuild} />} />
          <Route path="/recommendations" render={() => <Recommendations build={this.props.build} activeBuild={this.props.activeBuild} />} />
        </Switch>
      </main>
    );
  }

  render() {
    const build = this.props.build.length;
    return (
      build
      ? this.renderApp()
      : this.renderLoader()
    );
  }
}

export default Main;

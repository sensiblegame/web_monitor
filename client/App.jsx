import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = { build: [], activeBuild: 0 };
    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.selectBuild = this.selectBuild.bind(this);
  }

  componentDidMount() {
    fetch('/getstats')
    .then(res => res.json())
    .then((build) => {
      this.setState({ build, activeBuild: build.length - 1 });
    });
  }

  handleCircleClick(e) {
    const len = this.state.build.length;
    const index = len - e.target.getAttribute('data-build');
    this.setState({ activeBuild: len - index });
  }

  selectBuild(e) {
    const index = e.target.getAttribute('data-build');
    this.setState({ activeBuild: index - 1 });
  }

  render() {
    return (
      <div>
        <Header
          build={this.state.build}
          activeBuild={this.state.activeBuild}
          selectBuild={this.selectBuild}
        />
        <Main
          build={this.state.build}
          activeBuild={this.state.activeBuild}
          handleCircleClick={this.handleCircleClick}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import ColorPicker from './components/colorPicker';
import TextSetting from './components/textSetting';
import Result from './components/result';
import Reset from './components/reset';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }
  }

  onReceiveColor = (params) => {
    this.setState({
      color: params
    });
  }

  onReceiveSize = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
    return false;
  }

  onSettignDefault = (value) => {
    if (value === true) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onReceiveColor} />
          <div className="col-lg-6 col-md-6 col-6">
            <TextSetting textsetting={this.state.fontSize} onReceiveSize={this.onReceiveSize} />
            <Reset onSettignDefault={this.onSettignDefault} />
          </div>
          <Result color={this.state.color} fontsize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

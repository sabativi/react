import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class BtnValue extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }
  componentWillReceiveProps(props){
    this.setState({
      value: props.value,
    })
  }
  render(){
    return(
      <button>Updated : {this.state.value}</button>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue: '',
    }
    this.changeValue=this.changeValue.bind(this);
  }
  changeValue(){
    this.setState({
      btnValue: Math.random()*100,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.changeValue} > ClickMe </button>
        <BtnValue value={this.state.btnValue}/>
      </div>
    );
  }
}

export default App;

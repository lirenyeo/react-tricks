import React, { Component } from 'react';

export default class LearnInvoke extends Component {
  constructor(props) {
    super(props);
    this.state = { money: 10 }
  }

  _addMoney = (amount) => {
    console.log(this)
    this.setState({money: this.state.money + amount})
    return this
  }

  callAddMoney = () => {
    this._addMoney(5)
  }


  render() {
    return (
      <div>
        <h4>Use () to invoke functions</h4>
        <div>{ this.state.money }</div>
        <button onClick={ this.callAddMoney }>MORE</button>
        <button onClick={ () => {this._addMoney(5)} }>Same As Above</button>
        <hr />
      </div>
    );
    // This will not work:
    // <button onClick={ this._addMoney(5) }>Same As Above</button>
    // the () will invoke the function during rendering
    // onClick={ this.someFunc } is just passing the reference of someFunc to onClick
  }
}
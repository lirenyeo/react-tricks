import React, { Component } from 'react';

export default class SetState extends Component {
  state = { countA: 1, countB: 1 }

  _passFunction = () => {
    this.setState( (prevState, props) => ({
      countA: prevState.countA + 5
    }))
    this.setState( (prevState, props) => ({
      countA: prevState.countA + 5
    }))
  }

  _passObject = () => {
    this.setState({countB: this.state.countB + 5})
    this.setState({countB: this.state.countB + 5})
  }

  render() {
    return(
      <div>
        <h4>Passing function to setState</h4>
        <pre>pass (prevState) => () to setState</pre>
        <button onClick={ this._passFunction }>
          { this.state.countA }
        </button>
        <pre>pass obj to setState</pre>
        <button onClick={ this._passObject }>
          { this.state.countB }
        </button>
        <hr />
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class ConditionalRendering extends Component {
  renderStatus() {
    const { published, approved } = this.props
    if (approved) {
      if (published) {
        return <h6>Published</h6>
      } else {
        return <h6>Unpublished</h6>
      }
    } else {
      return <h6>Pending Approval</h6>
    }
  }

  render() {
    const { published, approved } = this.props
    return (
      <div>
        <h4>IIFE conditional rendering</h4>
        <div>
          {
            // what the fuck, how to read?
            approved ?
              published ? 
                <h6>Published</h6> : <h6>Unpublished</h6> : 
              <h6>Pending Approval</h6>
          }
        </div>

        <div>
          {
            // Use IIFE (Immediately-Invoked Function Expression)
            (() => {
              if (approved) {
                if (published) {
                  return <h6>Published</h6>
                } else {
                  return <h6>Unpublished</h6>
                }
              } else {
                return <h6>Pending Approval</h6>
              }
            })()
          }
        </div> 

        <div>
          {
            // create a function
            this.renderStatus()
          }
        </div>
        <hr />
      </div>
    )
  }
}

/*
if-else statements don't work inside JSX.
This is because JSX is just syntactic sugar for function calls and object construction. 
Take this basic example:

// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(React.createElement("div", {id:"msg"}, "Hello World!"), mountNode);


Therefore having if-else get you invalid JS:

// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");
*/
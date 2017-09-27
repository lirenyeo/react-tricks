import React, { Component } from 'react'
import './App.css'

import LearnInvoke          from './components/LearnInvoke'
import ConditionalRendering from './components/ConditionalRendering'
import SetState             from './components/SetState'

class App extends Component {
  state = {
    display: true,
    activeIndex: 0
  };

  closeModal = () => {
    this.setState(() => {
      return { display: false };
    });
  }

  render() {
    // Rules of Return:
    // ; is inserted on the same line as return whenever possible
    // Therefore without '(' after return, it becomes return;
    // And any code after that does not get executed
    return (
      <div>
        <SetState testProp={ 99 } />
        <LearnInvoke />
        <ConditionalRendering published={ true } approved={ false }/>
      </div>
    )
  }
}

export default App

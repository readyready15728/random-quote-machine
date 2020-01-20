import React from 'react';
import logo from './logo.svg';
import './App.css';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quoteText: 'Click "Get Quote" to get a fresh random quote'};
  }
  
  render() {
    return <p>{this.state.quoteText}</p>;
  }
}

function App() {
  return (
    <div className="App">
      <RandomQuoteMachine/>
    </div>
  );
}

export default App;

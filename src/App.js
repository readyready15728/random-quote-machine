import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click "New Quote" to get a fresh random quote',
      author: ''
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
    // this.handleTweetQuote = this.handleTweetQuote.bind(this);
  }

  handleNewQuote() {
    fetch('http://quotes.rest/quote/random.json?api_key=Ew5V22J4rcwSp2WetHcbXQeF')
      .then((response) => response.json())
      .then((data) => this.setState({text: data['contents']['quote'], author: data['contents']['author']}))
      .catch((error) => this.setState({text: error.message, author: ''}));
  }
  
  render() {
    return <Container id="quote-box" className="text-center" fluid={true}>
      <Row>
        <Col xs="12">
          <p id="text">{this.state.text}</p>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <p id="author">{this.state.author === '' ? '' : '—' + this.state.author}</p>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Button id="new-quote" block={true} onClick={this.handleNewQuote}>New Quote</Button>
        </Col>
        <Col xs="6">
          <Button id="tweet-quote" block={true}>Tweet Quote</Button>
        </Col>
      </Row>
    </Container>;
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

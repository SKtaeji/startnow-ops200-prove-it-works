import React, { Component } from 'react';
import Mortgage from './lib/Mortgage';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mortgage:'',
      principal:'',
      interest:'',
      term:'',
      period: 12,
      output:''
    }
  }

  handleClick() {
    var mortgage = new Mortgage(this.state.principal, this.state.interest, this.state.term)
    this.setState({
      mortgage: mortgage
    })
  }
  render() {
    return (
      <div className='App'>
        It works!
        <h1>Mortgage Calculator</h1> 
        <input name='principal' value={this.state.principal}/>
        <input name='interestRate' value={this.state.principal}/>
        <input name='loanTerm' value={this.state.term}/>
        <select name='period'>
          <option value='12'>Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <button name='submit' id='calculate' onChange={this.handleClick}>Calculate</button>
        <p id='output' value={this.state.output}></p>
      </div>
    );
  }
}

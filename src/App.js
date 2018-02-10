import React, { Component } from 'react';
import face from './naruto.jpg';

class App extends Component {

  handleClick() {
    alert('SHADOW CLONE JUTSU')
  }
  render() {
    const now = new Date();
    return(
      <div className="App">
        <Biography />
        <br />
        <center><Grocery /></center>
        <br />
        <right><Tasks /></right>
        <p>The date is: {now.toTimeString()}</p>
        <br />
        <button onClick={this.handleClick.bind(this)}>Click here</button>
      </div>
    );
  }
}

class Biography extends Component {
  render() {
    return (
      <div>
        <img src={face} style={{ float: 'left', paddingRight: 50 }} alt="meme" />
        <h1>Naruto Uzumaki</h1>
        <h2>Occupation: Ninja</h2>
        <p>Believe it!</p>
        <hr style={{clear:'left'}}/>
      </div>
    );
  }
}

class Grocery extends Component {
  render() {
    const groceries = ['ramen','rasengan','sasuke'];
    return (
      <div>
        <h2>Grocery List</h2>
        <div style={{border: '3px solid black', width: 300}}>
          <ul style={{listStyle: 'none', padding: 0}}>
            {groceries.map(topic => <li>{topic}</li>)} 
          </ul>
        </div>
        <br /><hr />
      </div>
    )
  }
}

class Tasks extends Component {
  constructor() {
    super();
    this.state = { 
      items: [] 
    };
  }

  handleClick2() {
    const items = this.state.items;
    items.push(this.textbox.value);
    this.setState({items: items});
  }

  handleClick3(item) {
    const items = this.state.items;
    var index = items.indexOf(item);
    if (index > -1) {
      items.splice(index,1);
    }
    this.setState({items: items})

  }

  render() {
    return (
      <div>
        <input type="text" ref={textbox => this.textbox = textbox} />
        <button onClick={this.handleClick2.bind(this)}>Add Item</button>
        <p>To-Do List</p>
        <ol>
          {this.state.items.map(item => <li>{item}{' '}<input type="button" onClick={this.handleClick3.bind(this, item)} /></li>)}
        </ol>
        <br /><hr />
      </div>
    )
  }
}

export default App;
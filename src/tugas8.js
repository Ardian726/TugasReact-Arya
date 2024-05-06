import "./App.css";
import React, { Component } from 'react';

class Tugas8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div className="container">
          <div className="box">
            <p>{count}</p>
            <button onClick={this.handleIncrement}>Tambah</button>
            { count > 10 ? <p>Sudah Lebih Dari 10</p> : <p></p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Tugas8;

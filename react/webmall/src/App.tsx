import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import axios from 'axios' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button onClick={() => {
            let url = "http://124.220.91.114:8080/home"
            axios.get(url).then(function (response) {
              let data = response.data
              alert(data)
            });
          }}>
            测试接口
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;

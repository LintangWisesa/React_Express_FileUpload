import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  unggahFile = (file) => {
    var url = 'http://localhost:5000/'
    var formData = new FormData()
    formData.append('file', file)
    var config = {
      headers: 
        {'Content-Type': 'multipart/form-data'}
    }
    return axios.post(url, formData, config)
    .then((res)=>{console.log(res)})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
            className="App-logo" alt="logo" 
            style={{marginBottom:'0px', height:'80px', width:'80px'}} 
          />
          <h1 style={{marginTop:'0px'}}>React File Upload</h1>
        </header>
        <br/>
        <center>
          <form encType="multipart/form-data">
            <input type="file" name="filename"
            onChange={ e => this.unggahFile(e.target.files[0])} 
            accept="image/*"/>
            {/* image/*  , image/png , application/pdf */}
          </form>
          <br/>
          {/* image from backend */}
          {/* <img src="http://localhost:5000/filestorage/fotoid.png" alt="" */}
          {/* style={{width:'50%', height:'50%'}}/> */}
        </center>
      </div>
    );
  }
}

export default App;

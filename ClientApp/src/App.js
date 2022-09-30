import React, { Component } from 'react';
import PacientiPage from './PacientPage/Index';
import DoctorPage from './DoctorPage/Index';
import Login from './LoginPage/Login';
import Auth from './Auth'
import './custom.css'
import { StrictMode } from 'react';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>


export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <StrictMode>
        <Auth/>
        </StrictMode>
    )
  }

}







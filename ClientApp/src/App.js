import React, { Component } from 'react';
import PacientiPage from './PacientPage/Index';
import DoctorPage from './DoctorPage/Index';
import Logo from './components/logo'  
import './custom.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

export default class App extends Component {
  static displayName = App.name;
  render () {
    return (
      <>
      <DoctorPage/>
      </>
    );
  }


}

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import HotelList from './components/HotelList';
import logo from './logo-almundo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <MuiThemeProvider>
        <Grid className="containerAll">
          <Row className="headerSection">
            <Col>
              <header className="nav-down">
                <AppBar style={{ backgroundColor: '#00008B' }} iconElementLeft = {<img src={logo} alt="Logo" className="logo" />}>
                  </AppBar>
              </header>
            </Col>
          </Row>
          <HotelList></HotelList>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

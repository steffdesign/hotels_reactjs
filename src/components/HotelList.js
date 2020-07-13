import React, { Component } from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Amenities from "./../constants/amenities";
import StarList from "./StarList";
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlueA400, amber500} from 'material-ui/styles/colors';
import Search from 'material-ui/svg-icons/action/search';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import TextField from 'material-ui/TextField';
import NoImage from './../nodisponible.jpg';
import './styles.css';

const url = "http://localhost:4000/hotels";
const urlSearchName = "http://localhost:4000/hotels/search/";

class HotelList extends Component {

	constructor(props) {
    super(props)
      this.state = { hotels: [] , stars: ['0']}
  }

  componentWillMount() {
    fetch(url)
      .then(info => info.json())
      .then(({hotels}) => {
        this.setState({hotels})
      })  
  }

  handleClick (e)
  {
    const keywordActual = document.getElementById("inputKeyword").value;
      e.preventDefault();
      if (keywordActual!==''){
        fetch(`${urlSearchName}${keywordActual}`)
        .then(info => info.json())
        .then(({hotels}) => {
          this.setState({hotels})
        }) 
      }
  }

  render() {
    let hotels = this.state.hotels;
    this.handleClick = this.handleClick.bind(this);
    return (
      <Row className="containerHotels">
        <Col xs={12} md={3} className="containerFilters">
          <h3>Filtros</h3>
          <div className="filterGeneral" key={'List1'}>
            <div className="searchName">
              <Search color={lightBlueA400} style={styles.floatIcon} />
              <h4>Nombre del Hotel</h4>
            </div>
            <div>
            <TextField className="inputSearch"
              style={styles.textFld}
              hintText="Ingrese el Nombre del Hotel" id="inputKeyword"/>
            <RaisedButton label="Aceptar" fullWidth={false} backgroundColor={'#00008B'} 
              labelColor={'#fff'} style={styles.raisedBtn} onClick={this.handleClick}/>
            </div>
          </div>  
          <div>    
            <div key={'List2'} className="filterGeneral">
              <div className="searchName">
                <ActionGrade color={lightBlueA400} style={styles.floatIcon} />
                <h4>Estrellas</h4>
              </div>   
              <CheckboxGroup
                checkboxDepth={2}
                name="stars"
                value={this.state.stars}
                onChange={this.starsChanged}>
                <label>
                  <Checkbox value="5"/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                </label>
                <label>
                  <Checkbox value="4"/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                </label>
                <label>
                  <Checkbox value="3"/> 
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                </label>
                <label>
                  <Checkbox value="2"/> 
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                </label>
                <label>
                  <Checkbox value="1"/> 
                    <ActionGrade color={amber500} style={styles.OneListStar}/>
                </label>
              </CheckboxGroup>
            </div>
          </div>
        </Col>
        <Col xs={12} md={9} className="StyleListHotel">
        {hotels.map(hotel => 
        <HotelDetails key={hotel.id} hotelDetails={hotel} />
        )}
      </Col>
      </Row>
    ) 
  }

  starsChanged = (newstars) => {
    this.setState({
      stars: newstars
    });

    var searchStar = `${url}/${newstars}`;
    if (newstars.length===Number(1)){
      fetch(url)
      .then(info => info.json())
      .then(({hotels}) => {
        this.setState({hotels})
      }) 
    }else{
       fetch(searchStar)
      .then(info => info.json())
      .then(({result : hotels}) => {
        this.setState({hotels})
      }) 
    }
  }
}


let styles = {
  textFld: { width: '70%'},
  raisedBtn: {width: '10%'},
  floatIcon: {float:'left'},
  allStar: {marginBottom:20},
  OneListStar: {marginBottom:0}
}

const HotelDetails = (props) => (
  <Paper zDepth={2}> 
  <Row className="DetailsHotel">
    <Col xs={12} md={4}>
    {props.hotelDetails.imgstr==='0' ?
      <img 
      src={NoImage}
      alt="Hotel"
      /> :
      <img 
      src={props.hotelDetails.imgstr}
      alt="Hotel"
      /> 
     } 
      
    </Col>
    <Col xs={12} md={5} className="starHotels">
    <h3>{props.hotelDetails.name}</h3>
          <div>
             <StarList numStar={props.hotelDetails.stars} />
          </div>
        {
       props.hotelDetails.amenities.map(amenitie => 
        <Amenities key={amenitie.length+amenitie} amenitie={amenitie} />
        )}

    </Col>
    <Col xs={12} md={3} className="priceAndMore">
      <p>Precio por noche por habitación</p>
      <h2>ARS <span>{props.hotelDetails.price}</span></h2>
      <RaisedButton label="Ver Hotel" fullWidth={true} backgroundColor={'#00008B'} labelColor={'#fff'}/>
      
    </Col>
  </Row>
  </Paper>
);


export default HotelList;

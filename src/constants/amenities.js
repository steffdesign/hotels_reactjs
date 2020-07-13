import React from 'react';
import Star from './../images/icons/filters/star.svg';
import bathrobes from './../images/icons/amenities/bathrobes.svg';
import bathtub from './../images/icons/amenities/bathtub.svg';
import beachpoolfacilities from './../images/icons/amenities/beach-pool-facilities.svg';
import beach from './../images/icons/amenities/beach.svg';
import businesscenter from './../images/icons/amenities/business-center.svg';
import childrenclub from './../images/icons/amenities/children-club.svg';
import coffemaker from './../images/icons/amenities/coffe-maker.svg';
import deepsoakingbathtub from './../images/icons/amenities/deep-soaking-bathtub.svg';
import fitnesscenter from './../images/icons/amenities/fitness-center.svg';
import garden from './../images/icons/amenities/garden.svg';
import kitchenfacilities from './../images/icons/amenities/kitchen-facilities.svg';
import newspaper from './../images/icons/amenities/newspaper.svg';
import nightclub from './../images/icons/amenities/nightclub.svg';
import restaurant from './../images/icons/amenities/restaurant.svg';
import safetybox from './../images/icons/amenities/safety-box.svg';
import separatebredroom from './../images/icons/amenities/separate-bredroom.svg';
import sheets from './../images/icons/amenities/sheets.svg';
import './styles.css';

const Amenities = (props) => {
      

    if (props.amenitie === 'bathrobes') {
        return(
            <img src={bathrobes} alt="Amenities" className="amenitiesIcons" />
        )}
    else if (props.amenitie === 'bathtub') {
        return(
            <img src={bathtub} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'beach-pool-facilities') {
        return(
            <img src={beachpoolfacilities} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'beach') {
        return(
            <img src={beach} alt="Amenities" className="amenitiesIcons" />
        );
    } 
    else if (props.amenitie === 'business-center') {
        return(
            <img src={businesscenter} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'children-club') {
        return(
            <img src={childrenclub} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'coffe-maker') {
        return(
            <img src={coffemaker} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'deep-soaking-bathtub') {
        return(
            <img src={deepsoakingbathtub} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'fitness-center') {
        return(
            <img src={fitnesscenter} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'garden') {
        return(
            <img src={garden} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'kitchen-facilities') {
        return(
            <img src={kitchenfacilities} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'newspaper') {
        return(
            <img src={newspaper} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'nightclub') {
        return(
            <img src={nightclub} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'restaurant') {
        return(
            <img src={restaurant} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'safety-box') {
        return(
            <img src={safetybox} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'separate-bredroom') {
        return(
            <img src={separatebredroom} alt="Amenities" className="amenitiesIcons" />
        );
    }
    else if (props.amenitie === 'sheets') {
        return(
            <img src={sheets} alt="Amenities" className="amenitiesIcons" />
        );
    }else {
    return(
            <img src={Star} alt="Amenities" className="amenitiesIcons" />
        );
    }
};


export default Amenities
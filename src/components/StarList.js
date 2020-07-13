import React from 'react';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {amber500} from 'material-ui/styles/colors';
import './styles.css';

const StarList = (props) => {
    if (props.numStar === 5) {
      return (
        <div className='weatherDataCont'>
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
        </div>);
    } else if (props.numStar === 4) {
      return (
        <div className='weatherDataCont'>
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
        </div>);
    }else if (props.numStar === 3) {
      return (
        <div className='weatherDataCont'>
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
        </div>);
    }else if (props.numStar === 2) {
      return (
        <div className='weatherDataCont'>
           <ActionGrade color={amber500} />
           <ActionGrade color={amber500} />
        </div>);
    }
    else {
      return (
        <div className='weatherDataCont'>
           <ActionGrade color={amber500} />
        </div>);
        
    }
  };

export default StarList
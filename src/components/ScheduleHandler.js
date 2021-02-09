import React from 'react';
import Schedule from './Schedule';
import NewSchedule from './NewSchedule';


class ScheduleHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      daysVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      daysVisibleOnPage: !prevState.daysVisibleOnPage
    }));
  }

  render(){
    let isScheduleShowing = null;
    let buttonText = null;
    if(this.state.daysVisibleOnPage) {
      isScheduleShowing = <Schedule/>
      buttonText = "Back to home";
    } else {
      isScheduleShowing = <NewSchedule />
      buttonText = "See Schedule";
  
    }
    return (
      <React.Fragment>
        {isScheduleShowing}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
    }
  }

  export default ScheduleHandler;


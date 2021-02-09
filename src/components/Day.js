import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

function Day(props){
  return (
    <>
      <Container>
        <h4 id="post-name">{props.day}</h4>
          <div class="inner-container">
            <p id="post-day">{props.hours}</p>
            <p id="post-location">{props.location}</p>
            <p id="post-booth">{props.booth}</p>
          </div>
          <hr/>
      </Container>
    </>
  );
}
Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};
export default Day;
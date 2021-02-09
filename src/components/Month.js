import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

function Month(props){
  return (
    <>
      <Container>
        <h4>{props.month}</h4>
          <div class="inner-container">
            <p>{(props.selection).forEach(e=> <p>e</p>)}</p>
          </div>
          <hr/>
      </Container>
    </>
  );
}
Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};
export default Month;
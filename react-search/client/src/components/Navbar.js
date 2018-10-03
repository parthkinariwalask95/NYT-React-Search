import React from "react";
import SearchForm from "./search";


const styles = {
  heading: {
    background: "#9a74db",
  }
}

const Nav = props => (
  <div>
    <nav className="navbar navbar-dark bg-warning text-black">
      <div className="container">
        <a className="navbar-brand"><h1>New York Times Article Search</h1></a>
      </div>
    </nav>
    <br />
    <div className="container">
      <div style={styles.heading} className="jumbotron">
        <p className="lead">
          <h1>Search For Articles By Topic And Year.</h1>
        </p>
        <hr className="my-4" />
        <SearchForm
          testFunction={props.testFunction}
          handleInputChange={props.handleInputChange}
        />
      </div>
    </div>
  </div>
);

export default Nav;
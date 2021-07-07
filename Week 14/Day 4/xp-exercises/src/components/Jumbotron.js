import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron() {
  return (
    <div>
      <div class="p-5 m-2 bg-light">
        <h1 class="mb-3">Welcome to React!</h1>
        <h4 class="mb-3">React is the most popular rendering library in the world</h4>
        <a class="btn btn-primary" href="https://reactjs.org/" role="button">
          Go to the Official Website
        </a>
      </div>
    </div>
  );
}

export default Jumbotron;

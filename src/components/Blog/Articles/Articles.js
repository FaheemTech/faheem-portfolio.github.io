import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Articles.css";
import Test from "../../../assets/showcase.jpg";

class Article extends Component {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  d = new Date();

  time =
    this.monthNames[this.d.getMonth()] +
    " " +
    new Date().getDay() +
    ", " +
    new Date().getFullYear();

  updated = "updated by " + this.time;

  componentDidMount() {
    let $ = window.$;
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div className="main-content bg-light">
              <div>
                <img src={Test} alt="Headshot pic" />
                <Link to="/blog/react-intro" id="decoration">
                  <p className="h5 font-weight-bold" id="title">
                    {" "}
                    How to set a boilerplate for MERN stack with GraphQL and
                    Next.js and Redux Thunk!{" "}
                  </p>

                  <p className="text-muted" id="subhead">
                    In this article, we will go witht the every steps from
                    installation to setup. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </Link>
              </div>
              <div />

              <div>
                <p id="subhead">
                  {" "}
                  by{" "}
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="He is a Great Guy"
                    id="decoration"
                  >
                    @faheem
                  </a>
                  <br />
                  <small
                    data-toggle="tooltip"
                    data-placement="top"
                    title={this.updated}
                    id="decoration"
                  >
                    {this.time}
                  </small>
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

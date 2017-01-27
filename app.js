/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Page from "./classes/Page";

import css from "./scss/app.scss";

var page  = document.createElement("div");
document.body.appendChild(page);
ReactDOM.render((<Page />),page);

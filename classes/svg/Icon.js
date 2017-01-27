/*jshint esversion: 6 */
import React from "react";
import IconElement from "./IconElement";
export default class IconLogo extends React.Component{render(){return(
  <svg name={this.props.id} viewBox={this.props.dim||"0 0 100 100"}  className={this.props.className} style={this.props.style} >
     <IconElement id={this.props.id}/>
  </svg>
);}}

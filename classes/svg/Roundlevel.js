/*jshint esversion: 6 */
import React from "react";
import IconElement from "./IconElement";
import PathGram from "./PathGram";
export default class Roundlevel  extends React.Component {render(){
  var p = this.props.level; if(p>99){p =99;}
  return(
  <svg viewBox="0 0 100 100" className="diagram">
    <PathGram value={p} />
    <text x={50} y={65} className="prime" >{this.props.level}</text>
  </svg>
)}};

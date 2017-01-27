/*jshint esversion: 6 */
import React from "react";
import IconElement from "./IconElement";
import PathGram from "./PathGram";
export default class SvgStat  extends React.Component {render(){return(
  <svg viewBox="0 0 100 100" className="diagram">
    <PathGram value={this.props.level} />
    <IconElement id={this.props.id}/>
  </svg>
)}};

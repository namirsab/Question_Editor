import React from "react";
export default class StatsGraph extends React.Component {
  LevelLine (a,p) {
    if(a.length > 1){var c = p.w/ (a.length-1) ; return "M0 "+p.h+" "+a.map(function(e,i){   return i*c+" "+(1-e)*p.h;   }).concat([p.w,p.h]).join(" ")+"z";}
    return "";
  }
  render(){
    return(
      <svg className='stats' viewBox="0 0 500 50" >
        <path d={this.LevelLine(this.props.stat||[],{w:500,h:50})} className="prime"></path>
        <path d='M0 0 L500 0' className="stepper"></path>
      </svg>
    );}
}

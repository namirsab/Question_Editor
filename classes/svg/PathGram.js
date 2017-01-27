/*jshint esversion: 6 */
import React from "react";

export default class PathGram extends React.Component {
cxy(cx,cy,r,d) {var rd=d*Math.PI/180.0;return [(cx+r*Math.cos(rd)).toFixed(2),(cy+r*Math.sin(rd)).toFixed(2)];}
arc(cx,cy,r,s,e){return this.cxy(cx,cy,r,s).concat(["A"+r,r,0,(Math.floor((e -s)/180)%2===0)?"0,1":"1,1"],this.cxy(cx,cy,r,e));}
harc(cx,cy,r,s,e){return ['M']+(this.arc(cx,cy,r,s,e)).join(" ");}
gram(pro){var degre = 90+pro*3.6;return {v:this.harc(50,50,45,90,degre),n:this.harc(50,50,45,degre,90)};}
render(){var gr=this.gram(this.props.value);return(
  <g>
  <path d={gr.v} className="line"/>
  <path d={gr.n} className="none"/>
  </g>
)}}

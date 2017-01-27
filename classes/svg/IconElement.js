/*jshint esversion: 6 */
import React from "react";
import IconLib from "svgpack!./svg.map.json";
class RPath extends React.Component {render(){
  var a = this.props; var b = {};
  for(var i in a){var name = i.split("_").map((e,n)=>{if(n==0){return e};return e[0].toUpperCase()+e.slice(1,e.length)}).join("");b[name] = a[i] ;}
  return(<path {...b} />);
}}
class Group extends React.Component {render(){
  var a = this.props.e; var b = {};
  return (<g>{sv.children.map(function(e,i){ return(<RPath {...e.attr} key={i} />);})}</g>);
}}
export default class IconElement extends React.Component {render(){
  var sv = IconLib[this.props.id.toLowerCase()] ||  IconLib.default;
  if(sv.node=="g"){return (<g className="icon" >{sv.children.map(function(e,i){ return(<RPath {...e.attr} key={i} />);})}</g>);}
  else if(sv.node=="path"){return(<RPath {...sv.attr} className="icon"  />);}
  else if("line,polygon,polyline".indexOf(sv.node) != -1){ return(<polygon {...sv.attr} className="icon"/>);}
  else if("circle,ellipse,rect".indexOf(sv.node) != -1){ return(null);}
  else{return(<path  d={svglib.default} className="icon"></path>);}
}}

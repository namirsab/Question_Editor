import React from "react";
import PictureHeader from "./PictureHeader";
export default class Row extends React.Component {
  changeRadio(e){ this.props.edit(this.props.i,'value',e.target.id);}
  generateOptions(n){ var a = [];for (var i = 0; i < n ; i++) {  a.push(0) }; return a;}
  render(){
    var list = this.generateOptions(this.props.col || 1);
    return (<li className="row" >
    <h1><PictureHeader {...this.props} /></h1>
    <div className="tab" >{ list.map((e,i)=><div key={i} ><button className={"radio "+((this.props.value == i)?"on":"off")}  id={i} onClick={this.changeRadio.bind(this)} /></div>) }
    </div>
    </li>); }
};

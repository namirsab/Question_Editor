/*jshint esversion: 6 */
import React from "react";
import IconLogo from "./svg/Icon";
var def_img = "default.jpg";

var def_img = "def_image.svg";

export default class HeadObject extends React.Component {
  changeTitle(e){ this.props.edit(this.props.i,'title',e.target.value);}
  remove(){ this.props.edit(this.props.i,'remove'); }
  editImage(evt){

    var p = this.props;
    var files = (evt.target || window.event.srcElement).files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () { p.edit(p.i,'img',fr.result ); }
        fr.readAsDataURL(files[0]);
    }else { console.log('Your Browser Not Supports this Feature') }
  }
  render(){
    var rid = this.props.title+"_"+this.props.i+Math.random();
    var img = (this.props.img)? <img   src={this.props.img||def_img} /> : <IconLogo   id='def_image' /> ;
     return (<div  className='sq_head' >
      <input className="file" type="file" id={rid} onChange={this.editImage.bind(this)} name="edit_image" accept=".jpg,.png" />
       <label className="file_lebel" htmlFor={rid} >
          {img}
       </label>
      <input className="title" type="text" onChange={this.changeTitle.bind(this)}  value={this.props.title} />
      <button  className="remove" onClick={this.remove.bind(this)} ><IconLogo id="remove" dim="0 0 100 100" /></button>
    </div>
  );}
};

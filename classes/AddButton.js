/*jshint esversion: 6 */
import React from "react";
import IconLogo from "./svg/Icon";
export default class AddButton extends React.Component {
  render(){ return <button className='add' {...this.props}> <IconLogo id="add" dim="0 0 100 100"/></button>; }
}

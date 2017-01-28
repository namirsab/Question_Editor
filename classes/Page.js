/*jshint esversion: 6 */
import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AddButton from "./AddButton";
import Row from "./Row";
import QuestionImage from "./QuestionImage";
import StatisticView from "./StatisticView";
import StatCounter from "./StatCounter";
import DataBase from "./DataBase";
import IconLogo from "./svg/Icon";

export default class Page extends React.Component {
  constructor(){ super(); this.state = DataBase.data;}
  edit_Col(i,a,v){this.setState(DataBase.edit({target:'columns',method:a,index:i,value:v}));}
  edit_row(i,a,v){ this.setState(DataBase.edit({target:'rows',method:a,index:i,value:v}));}
  default(){this.setState(DataBase.reset());}
  save(){this.setState(DataBase.save());}
 render() {
   console.log(this.state);
   var stat = StatCounter(this.state);
  return (
    <main>
      <section className="table" >
          <div className="data-manager" >
            <button className='reset' onClick={this.default.bind(this)} ><IconLogo id="reset" dim="0 0 100 100"/>Reset</button>
            <button className='save' onClick={this.save.bind(this)}  ><IconLogo id="save" dim="0 0 100 100"/>Save</button>
          </div>
          <ul className="matrix" >
           <li className="col" >
           <h1> </h1>
           <div className="tab" >
           <ReactCSSTransitionGroup transitionName="myanimation" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
           { this.state.columns.map((e,i)=><QuestionImage {...e} edit={this.edit_Col.bind(this)} i={i} key={i} />) }
           </ReactCSSTransitionGroup>
           <AddButton onClick={this.edit_Col.bind(this,0,'add')} />
           </div>
          </li>
           <ReactCSSTransitionGroup transitionName="myanimation" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
          {this.state.rows.map((e,i)=><Row {...e} col={this.state.columns.length} edit={this.edit_row.bind(this)} i={i} key={i} />)}
          </ReactCSSTransitionGroup>
          <li><AddButton onClick={this.edit_row.bind(this,0,'add')} /></li>
          </ul>
      </section>
      <StatisticView {...stat} />
    </main>
 );}
};

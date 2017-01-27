import React from "react";
import StatGraphic from "./svg/StatGraphic";
import Roundlevel from "./svg/Roundlevel";
var dataMap  = [
  ["row",'Number of rows'],
  ["col",'Number of columns'],
  ["img",'Number images uploaded'],
  ["long_row",'Longest row'],
  ["long_col",'Longest columns'],
  ["min_row",'Shortest row'],
  ["min_col",'Shortest columns']
]
export default class Statistic extends React.Component {
  render(){
    var stat = this.props;
    return(
      <section className="statistic" >

        <ul>
          {dataMap.map((e,i)=><li key={i}   ><Roundlevel level={stat[e[0]]}  /> <p> {e[1]} </p> </li>)}
        </ul>
        <StatGraphic stat={stat.graph} />
    </section>
  );
}
}

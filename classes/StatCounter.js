/*jshint esversion: 6 */
function MaxMin(array,s){return array.length && array.reduce((a,b)=>{return Math[(s && 'max'||"min")](a,b);}) || 0;}
export default function check_data(dataBase){
  var stat = {};
  stat.col = dataBase.columns.length;
  stat.row = dataBase.rows.length;
  var sRows = dataBase.rows.map((a)=>a.title.length);
  var sCol = dataBase.columns.map((a)=>a.title.length);
  stat.long_row = MaxMin(sRows,true);
  stat.long_col = MaxMin(sCol,true);
  stat.min_row = MaxMin(sRows,false);
  stat.min_col = MaxMin(sCol,false);
  stat.img = dataBase.columns.concat(dataBase.rows).filter((a)=>a.img).length;
  var s =  dataBase.columns.map((a)=>{return{label:a.title,count:0}});
  dataBase.rows.forEach((a)=>{if(s[a.value]){ s[a.value].count++;} });
  s = s.map((e)=>{return e.count/stat.row} );
  stat.graph = s ;
  return stat;
}

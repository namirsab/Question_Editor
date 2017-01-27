/*jshint esversion: 6 */
var dataBase = {
  rows: [
    {value: 1 , img : null , title: "book"},
    {value: 2 , img : null , title: "table"},
    {value: 3 , img : null , title: "car"},
    {value: 1 , img : null , title: "apple james"},
    {value: 2 , img : null , title: "airplanes"}
  ],
  columns:[
    {img : null , title: "red"},
    {img : null , title: "green"},
    {img : null , title: "Dark Gray"},
    {img : null , title: "white"},
    {img : null , title: "yellow"},
    {img : null , title: "orange"},
  ]
};

function editDataBase (p){
  var target = dataBase[p.target];

  console.log(target,p);

  if(target){
    switch (p.method) {
      case "add":
        target.push({value: null , img : null , title: "col "+target.length });
      break;
      case "remove":
        console.log(target,p);
       if(target.length > 1){
         target.splice(p.index,1)
         if(p.target=="columns"){
           dataBase.rows = dataBase.rows.map((e)=>{if(e.value == p.index){e.value = null; }else if(e.value > p.index){ e.value--;} ; return e;});
         }
       }
      break;
      default: target[p.index][p.method] = p.value;
    }
  }

  return dataBase;
}
module.exports = {edit: editDataBase , data : dataBase };

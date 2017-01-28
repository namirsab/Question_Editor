/*jshint esversion: 6 */
import img1  from "file-loader!./images/img1.jpg";
import img2  from "file-loader!./images/img2.jpg";
import img3  from "file-loader!./images/img3.jpg";
import img4  from "file-loader!./images/img4.jpg";
import img5  from "file-loader!./images/img5.jpg";
var dataBase = {
  rows: [
    {value: 1 , img : img1 , title: "Book"},
    {value: 2 , img : img2 , title: "Table"},
    {value: 4 , img : img3 , title: "Car"},
    {value: 2 , img : null , title: "Airplanes"},
    {value: 6 , img : null , title: "Aadgets"}
  ],
  columns:[
    {img : img3 , title: "Red"},
    {img : img4 , title: "Green"},
    {img : img1 , title: "Dark Gray"},
    {img : img5 , title: "White"},
    {img : img2 , title: "Yellow"},
    {img : null , title: "Orange"},
    {img : null , title: "DarkOliveGreen"},
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

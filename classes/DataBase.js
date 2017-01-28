/*jshint esversion: 6 */
import img1  from "base64-inline-loader!./images/img1.jpg";
import img2  from "base64-inline-loader!./images/img2.jpg";
import img3  from "base64-inline-loader!./images/img3.jpg";
var def_data = {
  rows: [
    {value: 1 , img : img1 , title: "Book"},
    {value: 2 , img : img2 , title: "Table"},
    {value: 4 , img : null , title: "Car"},
    {value: 2 , img : null , title: "Airplanes"},
  ],
  columns:[
    {img : img3 , title: "Red"},
    {img : img1 , title: "Green"},
    {img : img2 , title: "Dark Gray"},
    {img : null , title: "White"},
    {img : null , title: "Yellow"},
    {img : null , title: "Orange"},
    {img : null , title: "DarkOliveGreen"},
  ]
};
class Database {
  constructor() {
    this.data = {};
     if(localStorage.myDatabase){ this.checkLocalStorage();}else{this.reset();}
     console.log(this);
  }
  checkLocalStorage(){
    try{
      this.data = JSON.parse(localStorage.myDatabase);
      if(!this.data.rows.length || !this.data.columns.length  ){ throw "myException"; }
    }catch(e){this.reset();}
  }
  reset(){this.data = (JSON.parse(JSON.stringify(def_data))); localStorage.removeItem('myDatabase');return this.data ;}
  save(){ localStorage.myDatabase =JSON.stringify(this.data);  return this.data ;}
  edit (p){
    var target = this.data[p.target];
    if(target){
      switch (p.method) {
        case "add":
          target.push({value: null , img : null , title: "col "+target.length });
        break;
        case "remove":
         if(target.length > 1){
           target.splice(p.index,1)
           if(p.target=="columns"){
             this.data.rows = this.data.rows.map((e)=>{if(e.value == p.index){e.value = null; }else if(e.value > p.index){ e.value--;} ; return e;});
           }
         }
        break;
        default: target[p.index][p.method] = p.value;
      }
    }
    return this.data;
  }
}
module.exports = new Database();

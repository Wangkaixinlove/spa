 
var btn=document.getElementById("cal");
btn.onclick=function(){
  var width=document.getElementById("width").value;
  var height=document.getElementById("height").value;
  if(width != null && width!="" && height!=null && height !=""){
  var pre=document.getElementById("preimeter");
  pre.value=(parseFloat(width)+parseFloat(height))*2;
  var area=document.getElementById('area');
  area.value=parseFloat(width)*parseFloat(height);
  }
  else{
  var area=document.getElementById('area');
  area.value=null;
  }
}
  


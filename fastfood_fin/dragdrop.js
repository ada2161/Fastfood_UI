window.addEventListener("load",doThis,false);
function doThis(){
v=document.getElementById('cost');
item=document.getElementById('main_section');
item.addEventListener("dragstart",startdrag,false);

cart=document.getElementById('cart');
cart.addEventListener("dragenter",function(e){e.preventDefault();},false);
cart.addEventListener("dragover",function(e){e.preventDefault();},false);
cart.addEventListener("drop",dropped,false);

}
function startdrag(e){
var code=e.target.alt;
e.dataTransfer.setData('Text',code);

}
function dropped(e){
e.preventDefault();
am=parseInt(v.value);
v.value=am+parseInt(e.dataTransfer.getData('Text'));
}
function makeZero(){
v.value=0;

}
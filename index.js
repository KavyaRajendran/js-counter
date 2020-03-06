var inc = document.getElementById('increment');
var dec = document.getElementById('decrement');
var input = document.getElementById('value');

var newvalue = 0;
var result = 0;
function inc1() {
  newvalue = parseInt(input.value);
  result = newvalue+1; 
  if(result<=10) {
  document.getElementById('value').value=result;
  }
  else{
     document.getElementById("increment").disabled = true;
  }
}
function dec1() {
  newvalue = parseInt(input.value);
  result = newvalue-1; 
  if(result>=0 && result<=10){
  document.getElementById('value').value=result;
}
else {
  document.getElementById("decrement").disabled = true;
}
}

inc.addEventListener('click',inc1);
dec.addEventListener('click',dec1);

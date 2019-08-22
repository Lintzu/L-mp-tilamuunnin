document.getElementById("muunna").addEventListener("click",muunna);

function muunna() {
	
  //Arvo ylemmästä input laatikosta muuttujaan t1
  var t1 = Number(document.getElementById("lämpötila1").value);
  
  //Yksiköt select t1_unit ja t2_unit
  var t1_unit = document.getElementById("y1");
  t1_unit = t1_unit.options[t1_unit.selectedIndex].value;
  
  var t2_unit = document.getElementById("y2");
  t2_unit = t2_unit.options[t2_unit.selectedIndex].value;
  
  //Muunna muuttujan t1 lämpötila
  if(t1_unit == "Kelvin") 
  	t1 = t1 -  273.15;
  else if(t1_unit == "Fahrenheit") 
  	t1 = (t1-32)/1.8;
  
  //Muunna t1
  var t2 = 0;
  if(t2_unit == "Kelvin") 
  	t2 = t1 + 273.15;
  else if(t2_unit == "Fahrenheit") 
  	t2 = t1*1.8 + 32;
  else 
  	t2 = t1;
  
  //Siirrä arvo
  document.getElementById("lämpötila2").value = t2;

}
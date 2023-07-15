var name1 = prompt("Enter your name");
var name2 = prompt("Enter your crush name")
 
 

  var gen = Math.random();
var gen= gen*101;
var loki = Math.floor(gen);
  
 
 document.querySelector(".change").innerHTML = (loki);
 
 
 
 
 if (loki<=20)
 {var boto =document.querySelectorAll("img")[0];
 boto.setAttribute("src","1.gif");}
 
 
 
  else if (loki>=21&& loki<=40)
 {var boto =document.querySelectorAll("img")[0];
 boto.setAttribute("src","2.gif");}
 
 
 
 
 else if (loki>=41&& loki<=60)
 {var boto =document.querySelectorAll("img")[0];
 boto.setAttribute("src","3.gif");}
 
 
 
  else if (loki>=61&&loki<=80)
 {var boto =document.querySelectorAll("img")[0];
 boto.setAttribute("src","4.gif");}
 


else if (loki>=81 && loki<=100)
 {var boto =document.querySelectorAll("img")[0];
 boto.setAttribute("src","5.gif");}
 
 


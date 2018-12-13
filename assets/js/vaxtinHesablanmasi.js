 let muddet = setInterval(oyunVaxti,60000);
let muddetLimitsiz = setInterval(limitsizVaxtHesab,60000);

// ⓒ 2018 Powered by Javascript. Created by Firdovsi Rustemov

 function oyunVaxti() {
  


 if (document.getElementById('p1').innerHTML.length <= 3 && document.getElementById('hesabnovu1').innerHTML == "Standart") {
    if(document.getElementById('p1').innerHTML == 1) {
      bagla(1);
    }else {
      document.getElementById('p1').innerHTML--;
    }
 } 

 if (document.getElementById('p2').innerHTML.length <= 3 && document.getElementById('hesabnovu2').innerHTML == "Standart"){
  if(document.getElementById('p2').innerHTML == 1) {
      bagla(2);
    }else {
      document.getElementById('p2').innerHTML--;
    }
 } 

 if (document.getElementById('p3').innerHTML.length <= 3 && document.getElementById('hesabnovu3').innerHTML == "Standart"){
  if(document.getElementById('p3').innerHTML == 1) {
      bagla(3);
    }else {
      document.getElementById('p3').innerHTML--;
    }
 }

 if (document.getElementById('p4').innerHTML.length <= 3 && document.getElementById('hesabnovu4').innerHTML == "Standart"){
  if(document.getElementById('p4').innerHTML == 1) {
      bagla(4);
    }else {
      document.getElementById('p4').innerHTML--;
    }
 }

 }



 function limitsizVaxtHesab() {

  if (document.getElementById('p1').innerHTML.length <= 3 && document.getElementById('hesabnovu1').innerHTML == "Limitsiz") {
  document.getElementById('p1').innerHTML++;
 } 

 if (document.getElementById('p2').innerHTML.length <= 3 &&  document.getElementById('hesabnovu2').innerHTML == "Limitsiz"){
  document.getElementById('p2').innerHTML++;
 } 

 if (document.getElementById('p3').innerHTML.length <= 3 &&  document.getElementById('hesabnovu3').innerHTML == "Limitsiz"){
  document.getElementById('p3').innerHTML++;
 }

 if (document.getElementById('p4').innerHTML.length <= 3 &&  document.getElementById('hesabnovu4').innerHTML == "Limitsiz"){
  document.getElementById('p4').innerHTML++;
 }

 } 
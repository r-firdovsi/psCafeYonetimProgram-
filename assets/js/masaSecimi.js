let Masa;
let Mas;

// ⓒ 2018 Powered by Javascript. Created by Firdovsi Rustemov

function masaSecimi() {
 
for (let i= 1;i <=4;i++) {
  switch (Masa) {
    case document.getElementById('p'+i):
    hesabNovu = document.getElementById('hesabnovu'+i);
    Mas = document.getElementById('p'+i);
    masaVal = document.getElementById('p'+i+'hid');
    masaHesab = document.getElementById('masa'+i+'Hesab');
    buttonBagla = document.getElementById('bg'+i);
    valyuta = document.getElementById('valyuta'+i);
    icon = document.getElementById('ico'+i);
    iD = i;
    break;
  }
}


if (hesabNovu.innerHTML == "Limitsiz") {
    bagla(iD);
   if (Mas.innerHTML.length <=3) {
    standarHesabaElave();
  }else {
  Mas.innerHTML = oyunMuddeti;
  masaVal.style.display = "block";
  masaHesab.innerHTML = 0.125;
  hesabNovu.innerHTML = "Standart";
  buttonBagla.disabled = false;
  valyuta.style.display = "inline-block";
  icon.className = "fab fa-algolia";
  }

  }else {
  if (Mas.innerHTML.length <=3) {
    standarHesabaElave();
  }else {
  Mas.innerHTML = oyunMuddeti;
  masaVal.style.display = "block";
  masaHesab.innerHTML = 0.125;
  hesabNovu.innerHTML = "Standart";
  buttonBagla.disabled = false;
  valyuta.style.display = "inline-block";
  icon.className = "fab fa-algolia";
  }

  }
}

function standarHesabaElave() {
 

  for (let i = 1;i <=4;i++) {
    switch (Masa) {
      case document.getElementById('p'+i):
      document.getElementById('p'+i).innerHTML = parseFloat(document.getElementById('p'+i).innerHTML) + parseFloat(oyunMuddeti);
      break;
    }
  }
}


function limitsiz() {
	

for (let i = 1;i <=4;i++) {
  switch (Masa) {
    case document.getElementById('p'+i):
    hesabNovu = document.getElementById('hesabnovu'+i);
    Mas = document.getElementById('p'+i);
    masaVal = document.getElementById('p'+i+'hid');
    masaHesab = document.getElementById('masa'+i+'Hesab');
    buttonBagla = document.getElementById('bg'+i);
    valyuta = document.getElementById('valyuta'+i);
    icon = document.getElementById('ico'+i);
    iD = i;
    break;
  }
}

if (hesabNovu.innerHTML == "Standart") {
    bagla(iD);
  Mas.innerHTML = 0;
  masaVal.style.display = "block";
  masaHesab.innerHTML = 0.125;
  hesabNovu.innerHTML = "Limitsiz";
  buttonBagla.disabled = false;
  valyuta.style.display = "inline-block";
  icon.className = "fab fa-algolia";
  }else {
  Mas.innerHTML = 0;
  masaVal.style.display = "block";
  masaHesab.innerHTML = 0.125;
  hesabNovu.innerHTML = "Limitsiz";
  buttonBagla.disabled = false;
  valyuta.style.display = "inline-block";
  icon.className = "fab fa-algolia";
  }
}
let timeArea = document.getElementById('inputTimeArea');
let oyunMuddeti;

// ⓒ 2018 Powered by Javascript. Created by Firdovsi Rustemov


function setInputValue(buttonId) {

    let clickButton = document.getElementById('button'+buttonId);

    timeArea.value = clickButton.value;

    if (timeArea.value == clickButton.value && timeArea.value !== "") {
      document.getElementById('teyin').disabled = false;
    }
}



function teyinEt() {

    let teyinOlunmusVaxt = timeArea.value;
    oyunMuddeti = teyinOlunmusVaxt;
    timeArea.value = "";
    masaSecimi();
    document.getElementById('teyin').disabled = true;
}



function areaTrueFalse() {
 
    if (timeArea.value !== "") {
        document.getElementById('teyin').disabled = false;
    }else {
        document.getElementById('teyin').disabled = true;
    }
}



function popUp(masaId) {
    
    Masa = document.getElementById('p'+masaId);

    document.getElementById('times').style.display = "block";
    document.getElementById('kafeteriya').style.display = "none";
    timeArea.value = "";
    modal.style.display = "block";
}



function popUpp(masaId) {
    
    Masa = document.getElementById('p'+masaId);

    document.getElementById('times').style.display = "none";
    document.getElementById('kafeteriya').style.display = "inline-block";
    daxilMiqdar.value = "";
    modal.style.display = "block";
  
  for (let i = 1; i <=4; i++) {
    switch (Masa) {
      case document.getElementById('p'+i):
      hesabNovu = document.getElementById('hesabnovu'+i);
      break;
    }
  }

     for (let j = 1; j <=6; j++) {
           
      if (hesabNovu.innerHTML == ""){
              document.getElementById('mbtn' + j).disabled = true;
      }else{
                document.getElementById('mbtn' + j).disabled = false;  
      } 
  }

}


function bagla(buttonId) {

  let buttonNo = document.getElementById('bg' + buttonId);
  let table = document.getElementById("myTable");
    
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

  let tarix = new Date();



for (let i = 1; i <=4;i++) {

  switch (buttonNo) {
    case document.getElementById('bg'+i):
    masaNo = document.getElementById('masano'+i);
    hesabNovu = document.getElementById('hesabnovu'+i);
    Siparis = document.getElementById('sip' + i);
    kafHesab = document.getElementById('kafe'+i+'Hesab');
    hesabValyuta = document.getElementById('hesab'+i);
    Masa = document.getElementById('p'+i);
    masaVal = document.getElementById('p'+i+'hid');
    masaHesab = document.getElementById('masa'+i+'Hesab');
    buttonBagla = document.getElementById('bg'+i);
    valyuta = document.getElementById('valyuta'+i);
    icon = document.getElementById('ico'+i);
    break;
  }

}

cell1.innerHTML = masaNo.innerHTML;
cell2.innerHTML = hesabNovu.innerHTML;
if (Siparis.innerHTML == "Verilen Sifarisler") {cell3.innerHTML = "Sifaris Verilmeyib";}else {cell3.innerHTML = Siparis.innerHTML;}
cell4.innerHTML = tarix;
if (kafHesab.innerHTML == "Verilecek Mebleq"){cell5.innerHTML = masaHesab.innerHTML + " AZN";}else{cell5.innerHTML = parseFloat(masaHesab.innerHTML) + parseFloat(kafHesab.innerHTML) + " AZN";}
hesabNovu.innerHTML = "";
kafHesab.innerHTML = "Verilecek Mebleq";
hesabValyuta.style.display = "none";
Masa.innerHTML = "Oyun Muddetini Teyin Elemek Ucun Klikleyin";
masaVal.style.display = "none";
masaHesab.innerHTML = "Verilecek Mebleq";
Siparis.innerHTML = "Verilen Sifarisler"
buttonBagla.disabled = true;
document.getElementById('badge').style.display = "block";
valyuta.style.display = "none";
icon.className = "fab fa-playstation";
document.getElementById('total').innerHTML =parseFloat(document.getElementById('total').innerHTML) + parseFloat(cell5.innerHTML);

}


function hesabTarixcesi() {
  
  let Tarixce = document.getElementById('hesabtarixcesi');

  if (Tarixce.style.display == "none") {
    Tarixce.style.display = "block";
  } else {
    Tarixce.style.display = "none";
  }
  
   document.getElementById('badge').style.display = "none";
}


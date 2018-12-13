let secilenMehsul;

// ⓒ 2018 Powered by Javascript. Created by Firdovsi Rustemov

let daxilMiqdar = document.getElementById('dxolunanmiq');

let Mehsullar = {
	"Cay": 1.50,
	"Kofe": 0.60,
	"Snickers": 1.00,
	"Pletka": 2.00,
	"Cipsi": 1.40,
	"Cola": 2.00,
}


function kafeElave(buttonId) {
	let Mehsul = document.getElementById('mbtn'+ buttonId);
	
	let Cay = document.getElementById('mbtn1');
	let Kofe = document.getElementById('mbtn2');
	let Snickers = document.getElementById('mbtn3');
	let Pletka = document.getElementById('mbtn4');
	let Cipsi = document.getElementById('mbtn5');
	let Cola = document.getElementById('mbtn6');


for (let i = 1; i <= 4;i++) {

	switch (Masa) {
		case document.getElementById('p'+i):
		Siparis = document.getElementById('sip' + i);
		kafHesab = document.getElementById('kafe'+i+'Hesab');
		hesabVal = document.getElementById('hesab' + i);
		break;

	}
}

switch (Mehsul) {
	case Cay:
	secilenMehsul = Cay.value;
	mehsulSecimi = Cay;
	break;
	case Kofe:
	secilenMehsul = Kofe.value;
	mehsulSecimi = Kofe;
	break;
	case Snickers:
	secilenMehsul = Snickers.value;
	mehsulSecimi = Snickers;
	break;
	case Pletka:
	secilenMehsul = Pletka.value;
	mehsulSecimi = Pletka;
	break;
	case Cipsi:
	secilenMehsul = Cipsi.value;
	mehsulSecimi = Cipsi;
	break;
	case Cola:
	secilenMehsul = Cola.value;
	mehsulSecimi = Cola;
	break;
}



	if (Siparis.innerHTML == 'Verilen Sifarisler')  {
			
					if (daxilMiqdar.value !== "") {

						Siparis.innerHTML = mehsulSecimi.value + "x" + daxilMiqdar.value;
					 kafHesab.innerHTML = Mehsullar[secilenMehsul] * daxilMiqdar.value;
					 hesabVal.style.display = "inline-block";
					}else {
						Siparis.innerHTML = mehsulSecimi.value;
					 kafHesab.innerHTML = Mehsullar[secilenMehsul];
					 hesabVal.style.display = "inline-block";
					}


		}else{
			
					if (daxilMiqdar.value !== "") {

					Siparis.innerHTML += " , "+  mehsulSecimi.value+"x"+daxilMiqdar.value;
					kafHesab.innerHTML = parseFloat(kafHesab.innerHTML) + Mehsullar[secilenMehsul]* daxilMiqdar.value;
					}else {
					Siparis.innerHTML += " , "+  mehsulSecimi.value;
					kafHesab.innerHTML = parseFloat(kafHesab.innerHTML) + Mehsullar[secilenMehsul];
		}

		}
		daxilMiqdar.value = "";
}

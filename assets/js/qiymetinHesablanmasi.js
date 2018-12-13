let hesab = setInterval(qiymetHesabla,300000); 

// ⓒ 2018 Powered by Javascript. Created by Firdovsi Rustemov

function qiymetHesabla() {

if (document.getElementById('masa1Hesab').innerHTML.length <= 5) {
    document.getElementById('masa1Hesab').innerHTML = parseFloat(document.getElementById('masa1Hesab').innerHTML) + 0.125;
  }

if (document.getElementById('masa2Hesab').innerHTML.length <= 5) {
    document.getElementById('masa2Hesab').innerHTML = parseFloat(document.getElementById('masa2Hesab').innerHTML) + 0.125;
  }

if (document.getElementById('masa3Hesab').innerHTML.length <= 5) {
    document.getElementById('masa3Hesab').innerHTML = parseFloat(document.getElementById('masa3Hesab').innerHTML) + 0.125;
  }

if (document.getElementById('masa4Hesab').innerHTML.length <= 5) {
    document.getElementById('masa4Hesab').innerHTML = parseFloat(document.getElementById('masa4Hesab').innerHTML) + 0.125;
  }

}
//todo TYT Puan Hesaplama ------------------------------------------------

let matematikDogru=0;
let matematikYanlis=0;
let turkceDogru=0;
let turkceYanlis=0;
let sosyalDogru=0;
let sosylaYanlis=0;
let fenDogru=0;
let fenYanlis=0;
let toplamDogru=0;
let toplamYanlis=0;
let toplamNet=0;
let okulPuani=0;
let yuzpuan=100;
let puan=0;
let yenisatir="\r\n";
let secim=0;
let metin="TYT puan hesap makinesine hoşheldiniz!"+yenisatir+
"1- Puan hesaplama"+yenisatir+"2- Çıkış yap";
secim=prompt(metin);
 

// Doğru ve Yanlış Değerlerini Alıcam-------------------------------

switch(secim){
    case "1":
         turkceDogru=Number(prompt("Türkçe doğru sayısı:"));
         turkceYanlis=Number(prompt("Türkçe yanlış sayısı:"));

         matematikDogru=Number(prompt("Matematik doğru sayısı:"));
         matematikYanlis=Number(prompt("Matematik yanlış sayısı:"));

         sosyalDogru=Number(prompt("Sosyal doğru sayısı:"));
         sosylaYanlis=Number(prompt("Sosyal yanlış sayısı:"));

         fenDogru=Number(prompt("Fen doğru sayısı:"));
         fenYanlis=Number(prompt("Fen yanlış sayısı:"));
         
         okulPuani=Number(prompt("Okul paunnıznız:"));


         toplamDogru=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
         toplamYanlis=turkceYanlis+matematikYanlis+sosylaYanlis+fenYanlis;
         toplamNet=toplamDogru-(toplamNet/4);
         puan=(toplamNet*4)+okulPuani+yuzpuan
         alert("TYT puanınız:"+puan)
         break;
    case "2":

    break;


    default:
        alert("Geçerli bir sayı giriniz!")

    break;
         

        
        
}



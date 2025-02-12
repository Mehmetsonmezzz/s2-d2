const { fifaData } = require("./fifa.js");

/*"Year": 1930,
    "Datetime": "13 Jul 1930 - 15:00",
    "Stage": "Group 1",
    "Stadium": "Pocitos",
    "City": "Montevideo",
    "Home Team Name": "France",
    "Home Team Goals": 4,
    "Away Team Goals": 1,
    "Away Team Name": "Mexico",
    "Win conditions": "",
    "Attendance": 4444,
    "Half-time Home Goals": 3,
    "Half-time Away Goals": 0,
    "Referee": "LOMBARDI Domingo (URU)",
    "Assistant 1": "CRISTOPHE Henry (BEL)",
    "Assistant 2": "REGO Gilberto (BRA)",
    "RoundID": 201,
    "MatchID": 1096,
    "Home Team Initials": "FRA",
    "Away Team Initials": "MEX" */
/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)
let filteredMac = fifaData.filter((mac) => {
  if (mac.Year === 2014 && mac.Stage === "Final") {
    return mac;
  }
});
console.log(filteredMac[0]["Home Team Name"]);
//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
let filteredMac2 = fifaData.filter((mac) => {
  if (mac.Year === 2014 && mac.Stage === "Final") {
    return mac;
  }
});
console.log(filteredMac[0]["Away Team Name"]);
//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
let homeTeamGoals = fifaData.filter((mac) => {
  if (mac.Year === 2014 && mac.Stage === "Final") {
    return mac;
  }
});
console.log(homeTeamGoals[0]["Home Team Goals"]);
//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
let awayTeamGoals = fifaData.filter((mac) => {
  if (mac.Year === 2014 && mac.Stage === "Final") {
    return mac;
  }
});
console.log(awayTeamGoals[0]["Away Team Goals"]);
//(e) 2014 Dünya kupası finali kazananı*/

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(data) {
  const finals = data.filter((item) => item.Stage === "Final");
  return finals;
}

console.log(Finaller(fifaData));

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(arr, fonk) {
  /* kodlar buraya */
  const finalMaclariDizisi = fonk(arr);
  const yillar = finalMaclariDizisi.map((mac) => mac.Year);
  return yillar;
}
console.log(Yillar(fifaData, Finaller));
/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(arr, func) {
  /* kodlar buraya */
  const finalMaclariDizisi = func(arr);
  const kazananlar = finalMaclariDizisi.map((mac) => {
    if (mac["Home Team Goals"] > mac["Away Team Goals"]) {
      return mac["Home Team Name"];
    } else {
      return mac["Away Team Name"];
    }
  });
  return kazananlar;
}

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(birDizi, cbFinaller, cbYillar, cbKazananlar) {
  const finalMaclariDizisi = cbFinaller(birDizi);

  const yillar = cbYillar(finalMaclariDizisi, cbFinaller);
  const kazananlar = cbKazananlar(finalMaclariDizisi, cbFinaller);

  const yillaraGoreKazananlar = yillar.map((yil, index) => {
    return `${yil} yılında, ${kazananlar[index]} dünya kupasını kazandı!`;
  });
  return yillaraGoreKazananlar;
}

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(Finaller) {
  const finalMaclarDizisi = Finaller;
  const toplamGolSayisi = finalMaclarDizisi.reduce((acc, mac) => {
    return acc + mac["Home Team Goals"] + mac["Away Team Goals"];
  }, 0);
  const OrtalamaGolSayisi = toplamGolSayisi / finalMaclarDizisi.length;

  return OrtalamaGolSayisi.toFixed(2);
}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
